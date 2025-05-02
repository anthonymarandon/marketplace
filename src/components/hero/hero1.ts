import { Component } from "@/types/components";
import Hero1 from "./hero.react/hero1";

export const componentHero1: Component = {
  id: 'hero1',
  name: 'Hero 1',
  description: 'Server Component',
  category: 'hero',
  component: Hero1,
  code: `import Link from 'next/link';

export default function Hero1() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Créez {' '}
              <span className="text-purple-600">l'incroyable</span> avec nous
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transformez votre vision en réalité grâce à notre plateforme de
              pointe qui permet aux créateurs et aux innovateurs de construire
              la prochaine génération d'expériences numériques.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/join" className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                Commencer <span className="ml-2">→</span>
              </Link>
              <Link href="/about" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
                En savoir plus
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>Rejoignez nos 2 000+ clients satisfaits</span>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?q=80&w=800&auto=format&fit=crop"
              alt="création numérique" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} `
}

