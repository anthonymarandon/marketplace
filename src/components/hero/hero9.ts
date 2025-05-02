import { Component } from "@/types/components";
import Hero9 from "./hero.react/hero9";

export const componentHero9: Component = {
  id: 'hero9',
  name: 'Hero 9',
  description: 'Server Component',
  category: 'hero',
  component: Hero9,
  code: `import Link from 'next/link';

export default function Hero9() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative order-first md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
              alt="développement web moderne"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left order-last md:order-last">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Développez <span className="text-cyan-300">sans limites</span> avec nos APIs
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Intégrez facilement nos services robustes dans vos applications grâce à une documentation claire et des APIs puissantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link href="/developers" className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                Documentation Développeur <span className="ml-2">→</span>
              </Link>
              <Link href="/api-status" className="bg-transparent text-white font-semibold py-3 px-6 rounded-lg border border-gray-400 hover:bg-white hover:text-purple-700 transition duration-300 ease-in-out whitespace-nowrap">
                Statut des APIs
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-300">
              <span>SDKs disponibles pour vos langages préférés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} `
}