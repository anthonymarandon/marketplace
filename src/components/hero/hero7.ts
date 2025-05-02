import { Component } from "@/types/components";
import Hero7 from "./hero.react/hero7";

export const componentHero7: Component = {
  id: 'hero7',
  name: 'Hero 7',
  description: 'Server Component',
  category: 'hero',
  component: Hero7,
  code: `import Link from 'next/link';

export default function Hero7() {
  return (
    <section id='hero' className="py-12 md:py-20 lg:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Performances <span className="text-yellow-400">optimisées</span> pour le succès
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Bénéficiez d'une infrastructure rapide, fiable et évolutive pour propulser vos projets vers de nouveaux sommets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/performance" className="bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
              Voir les benchmarks <span className="ml-2">→</span>
            </Link>
            <Link href="/pricing" className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 hover:bg-gray-600 transition duration-300 ease-in-out whitespace-nowrap">
              Nos tarifs
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <span>Garantie de disponibilité 99.9%</span>
          </div>
        </div>
      </div>
    </section>
  );
} `
}