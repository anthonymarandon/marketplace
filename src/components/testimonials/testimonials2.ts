import { Component } from "@/types/components";
import Testimonials2 from "./testimonials.react/testimonials2";

export const componentTestimonials2: Component = {
  id: 'testimonials2',
  name: 'Testimonials 2',
  description: 'Server Component',
  category: 'testimonials',
  component: Testimonials2,
  code: `export default function Testimonials2() {
  return (
    <section className="bg-gray-100 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
            La Confiance de Nos Partenaires
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Découvrez pourquoi tant d'entreprises choisissent nos solutions pour leur croissance.
          </p>
          <div className="inline-block w-16 h-1 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4 shadow-sm"
              src="https://i.pravatar.cc/150?img=2"
              alt="Avatar de Jean Dupont"
              width={64}
              height={64}
            />
            <p className="text-gray-700 italic mb-4 flex-grow">
              "Le professionnalisme et la réactivité de l'équipe ont été exceptionnels. Nous avons obtenu des résultats bien au-delà de nos espérances initiales."
            </p>
            <h3 className="text-lg font-medium text-gray-900">
              Jean Dupont
            </h3>
            <p className="text-sm text-blue-600">
              Chef de Projet, Innovatech
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4 shadow-sm"
              src="https://i.pravatar.cc/150?img=4"
              alt="Avatar de Marie Leclerc"
              width={64}
              height={64}
            />
            <p className="text-gray-700 italic mb-4 flex-grow">
              "Une collaboration fructueuse qui a permis d'optimiser nos processus internes. Hautement recommandé !"
            </p>
            <h3 className="text-lg font-medium text-gray-900">
              Marie Leclerc
            </h3>
            <p className="text-sm text-blue-600">
              Responsable Opérations, SolutionPro
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center flex flex-col items-center">
            <img
              className="w-16 h-16 rounded-full mb-4 shadow-sm"
              src="https://i.pravatar.cc/150?img=6"
              alt="Avatar de Paul Martin"
              width={64}
              height={64}
            />
            <p className="text-gray-700 italic mb-4 flex-grow">
              "Leur expertise nous a aidés à surmonter des défis complexes. Une équipe dédiée et compétente."
            </p>
            <h3 className="text-lg font-medium text-gray-900">
              Paul Martin
            </h3>
            <p className="text-sm text-blue-600">
              Directeur Technique, BuildIt SARL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
`
};
