import { Component } from "@/types/components";
import Hero10 from "./hero.react/hero10";

export const componentHero10: Component = {
  id: 'hero10',
  name: 'Hero 10',
  description: 'Server Component',
  category: 'hero',
  component: Hero10,
  code: `import Link from 'next/link';

export default function Hero10() {
  return (
    <section id='hero' className="py-12 md:py-20 lg:py-24 bg-teal-50 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Support <span className="text-teal-600">dédié</span> à votre écoute
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Notre équipe d'experts est là pour vous aider à chaque étape, assurant une expérience fluide et réussie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
              Contacter le support <span className="ml-2">→</span>
            </Link>
            <Link href="/faq" className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
              Consulter la FAQ
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <span>Réponse garantie en moins de 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
} `
}