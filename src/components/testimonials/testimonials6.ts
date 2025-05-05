import { Component } from "@/types/components";
import Testimonials6 from "./testimonials.react/testimonials6";

export const componentTestimonials6: Component = {
  id: 'testimonials6',
  name: 'Testimonials 6',
  description: 'Server Component',
  category: 'testimonials',
  component: Testimonials6,
  code: `export default function Testimonials6() {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
           <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase mb-2">
             Témoignages
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Ce Que Nos Clients Disent Vraiment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          <div className="relative">
            <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-pink-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z" />
            </svg>
            <blockquote className="relative">
              <p className="text-lg text-gray-700 leading-relaxed">
                "Leur approche personnalisée a fait toute la différence. Nous nous sommes sentis écoutés et compris à chaque étape."
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-medium text-gray-900">Isabelle Girard</p>
              <p className="text-base text-pink-600">Directrice Artistique, Vision Créative</p>
            </footer>
          </div>

          <div className="relative">
             <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-pink-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z" />
            </svg>
            <blockquote className="relative">
              <p className="text-lg text-gray-700 leading-relaxed">
                "Des performances améliorées et un retour sur investissement rapide. Que demander de plus ?"
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-medium text-gray-900">Michel Lambert</p>
              <p className="text-base text-pink-600">Responsable E-commerce, ShopOnline</p>
            </footer>
          </div>

          <div className="relative">
            <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-pink-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z" />
            </svg>
            <blockquote className="relative">
              <p className="text-lg text-gray-700 leading-relaxed">
                "Une équipe fiable, compétente et toujours disponible pour répondre à nos questions. C'est un plaisir de travailler avec eux."
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-medium text-gray-900">Valérie Simon</p>
              <p className="text-base text-pink-600">Gérante, Boutique Chic</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
`
};
