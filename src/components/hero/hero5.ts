import { Component } from "@/types/components";
import Hero5 from "./hero.react/hero5";

export const componentHero5: Component = {
  id: 'hero5',
  name: 'Hero 5',
  description: 'Server Component',
  category: 'hero',
  component: Hero5,
  code: `import Link from 'next/link';

export default function Hero5() {
  return (
    <section id='hero' className="py-8 md:py-16 lg:py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Connectez vos <span className="text-cyan-600">idées</span> au monde
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Partagez vos créations et collaborez sans effort grâce à notre plateforme intégrée et intuitive.
            </p>
            <div className="flex flex-row gap-4">
              <Link href="/connect" className="bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-cyan-700 transition duration-300 ease-in-out flex items-center justify-center whitespace-nowrap">
                Se connecter <span className="ml-2">→</span>
              </Link>
              <Link href="/community" className="bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out whitespace-nowrap">
                Communauté
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span>Rejoignez des milliers de créateurs</span>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
              alt="connexion mondiale"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} `
}