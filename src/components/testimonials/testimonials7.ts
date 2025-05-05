import { Component } from "@/types/components";
import Testimonials7 from "./testimonials.react/testimonials7";

export const componentTestimonials7: Component = {
  id: 'testimonials7',
  name: 'Testimonials 7',
  description: 'Server Component',
  category: 'testimonials',
  component: Testimonials7,
  code: `export default function Testimonials7() {
  return (
    <section className="bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-left max-w-3xl mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paroles de Clients Satisfaits
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez comment nous avons aidé des entreprises comme la vôtre à atteindre leurs objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="border-t-4 border-orange-500 pt-6 px-6 pb-8 flex-grow">
                <blockquote className="text-gray-800 text-xl italic font-medium mb-4">
                    "Absolument indispensable pour notre flux de travail. Gain de temps énorme!"
                </blockquote>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                    src="https://i.pravatar.cc/150?img=20"
                    alt="Avatar de Julien Robert"
                    width={48}
                    height={48}
                />
                <div>
                    <p className="text-base font-semibold text-gray-900">Julien Robert</p>
                    <p className="text-sm text-orange-600">Lead Designer, PixelPerfect</p>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="border-t-4 border-orange-500 pt-6 px-6 pb-8 flex-grow">
                <blockquote className="text-gray-800 text-xl italic font-medium mb-4">
                    "Le support client est réactif et efficace. Ils ont résolu mon problème en quelques minutes."
                </blockquote>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                    src="https://i.pravatar.cc/150?img=21"
                    alt="Avatar de Claire Bonnet"
                    width={48}
                    height={48}
                />
                <div>
                    <p className="text-base font-semibold text-gray-900">Claire Bonnet</p>
                    <p className="text-sm text-orange-600">Chef de Produit, Agile Corp</p>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="border-t-4 border-orange-500 pt-6 px-6 pb-8 flex-grow">
                <blockquote className="text-gray-800 text-xl italic font-medium mb-4">
                    "Les fonctionnalités sont puissantes et faciles à utiliser. Je ne pourrais plus m'en passer."
                </blockquote>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4 object-cover flex-shrink-0"
                    src="https://i.pravatar.cc/150?img=22"
                    alt="Avatar de Marc Dubois"
                    width={48}
                    height={48}
                />
                <div>
                    <p className="text-base font-semibold text-gray-900">Marc Dubois</p>
                    <p className="text-sm text-orange-600">Développeur Freelance</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`
};
