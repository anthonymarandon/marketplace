'use client'

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getComponentById } from '@/app/landing/componentList';
import { Component } from '@/types/components';
import PreviewArea from './UI/previewArea';
import Toolbar from './UI/toolbar';

function ComponentDataLoader(): { data: Component | null, error: string | null } {
  const searchParams = useSearchParams();
  const componentId = searchParams.get('componentId');

  if (!componentId) {
    return { data: null, error: "Erreur: ID du composant manquant." };
  }

  const componentData = getComponentById(componentId);

  if (!componentData) {
     return { data: null, error: "Erreur: Composant non trouvé." };
  }

  return { data: componentData as Component, error: null };
}

export default function PreviewPage() {
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => setShowCode(prev => !prev);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Toolbar showCode={showCode} toggleShowCode={toggleShowCode} />
      <div className="flex-grow flex items-center justify-center p-4">
         <Suspense fallback={<div className="text-center text-white">Chargement...</div>}>
            <PreviewContentWrapper showCode={showCode} />
         </Suspense>
      </div>
    </div>
  );
}

function PreviewContentWrapper({ showCode }: { showCode: boolean }) {
  const { data: componentData, error } = ComponentDataLoader();

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!componentData) {
     return <div className="text-yellow-500 text-center mt-10">Données du composant non disponibles.</div>;
  }

  const { component, code } = componentData;

  return (
    <PreviewArea
      ComponentToPreview={component}
      code={code || ''}
      showCode={showCode}
    />
  );
}
