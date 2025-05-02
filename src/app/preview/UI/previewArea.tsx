import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';

interface PreviewAreaProps {
  ComponentToPreview: React.ElementType;
  code: string;
  showCode: boolean;
}

export default function PreviewArea({ ComponentToPreview, code, showCode }: PreviewAreaProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Erreur lors de la copie: ', err);
    });
  };

  return (
    <div className="w-full border border-dashed border-gray-600 rounded-lg bg-white text-black overflow-auto relative">
      {showCode ? (
        <div className="w-full relative bg-gray-800 text-white p-4 font-mono text-sm">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded text-xs flex items-center transition-colors duration-200 z-10"
            title="Copier le code"
          >
            {copied ? (
               <><FaCheck className="mr-1" /> Copié!</>
            ) : (
              <><FaCopy className="mr-1" /> Copier</>
            )}
          </button>
          <pre><code className="language-javascript">{code}</code></pre>
        </div>
      ) : (
        <div className="w-full p-4">
          <ComponentToPreview />
        </div>
      )}
    </div>
  );
}