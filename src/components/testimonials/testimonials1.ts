import { Component } from "@/types/components";
import Testimonials1 from "./testimonials.react/testimonials1";

export const componentTestimonials1: Component = {
  id: 'testimonials1',
  name: 'Testimonials 1',
  description: 'Server Component',
  category: 'testimonials',
  component: Testimonials1,
  code: `export default function Testimonials1() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Approuvé par des milliers d'entreprises dans le monde entier, voici ce que
            certains de nos clients satisfaits ont à dire sur nos services.
          </p>
          <div className="flex justify-center">
             <div className="w-20 h-1 bg-purple-600 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center relative"
            style={{ boxShadow: '0 10px 25px -5px rgba(109, 40, 217, 0.1), 0 8px 10px -6px rgba(109, 40, 217, 0.1)' }}
          >
            <svg className="absolute top-4 left-4 w-8 h-8 text-purple-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <svg className="absolute bottom-4 right-4 w-8 h-8 text-purple-200 opacity-50 transform scale-y-[-1] scale-x-[-1]" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <img
              className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-md"
              src="https://i.pravatar.cc/150?img=1"
              alt="Avatar de Sarah Johnson"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Sarah Johnson
            </h3>
            <p className="text-sm text-purple-700 font-medium mb-4">
              Directrice Marketing, Example Inc.
            </p>
            <p className="text-gray-600 italic mb-6">
              "L'équipe a dépassé nos attentes. Leur attention aux détails et leur engagement envers l'excellence ont fait de notre projet un grand succès. Je ne pourrais pas être plus heureuse des résultats!"
            </p>
            <div className="flex justify-center mt-auto">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center relative"
            style={{ boxShadow: '0 10px 25px -5px rgba(109, 40, 217, 0.1), 0 8px 10px -6px rgba(109, 40, 217, 0.1)' }}
          >
             <svg className="absolute top-4 left-4 w-8 h-8 text-purple-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <svg className="absolute bottom-4 right-4 w-8 h-8 text-purple-200 opacity-50 transform scale-y-[-1] scale-x-[-1]" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <img
              className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-md"
              src="https://i.pravatar.cc/150?img=3"
              alt="Avatar de David Rodriguez"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              David Rodriguez
            </h3>
            <p className="text-sm text-purple-700 font-medium mb-4">
              PDG, TechStart Inc.
            </p>
            <p className="text-gray-600 italic mb-6">
              "Travailler avec cette équipe a changé la donne pour notre entreprise. Leurs solutions innovantes et leur support fiable nous ont aidés à nous développer plus rapidement que nous ne l'aurions imaginé."
            </p>
            <div className="flex justify-center mt-auto">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center relative"
            style={{ boxShadow: '0 10px 25px -5px rgba(109, 40, 217, 0.1), 0 8px 10px -6px rgba(109, 40, 217, 0.1)' }}
          >
             <svg className="absolute top-4 left-4 w-8 h-8 text-purple-200 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <svg className="absolute bottom-4 right-4 w-8 h-8 text-purple-200 opacity-50 transform scale-y-[-1] scale-x-[-1]" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 8C7.5 8 6 9.5 6 11.333v10.667C6 23.833 7.5 25.333 9.333 25.333h4.667v-8H9.333V11.333h6.667V8H9.333zm12 0c-1.833 0-3.333 1.5-3.333 3.333v10.667c0 1.833 1.5 3.333 3.333 3.333h4.667v-8h-4.667V11.333H28V8h-6.667z"/>
            </svg>
            <img
              className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-md"
              src="https://i.pravatar.cc/150?img=5"
              alt="Avatar de Emily Chen"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Emily Chen
            </h3>
            <p className="text-sm text-purple-700 font-medium mb-4">
              Chef de Produit, Innovate Solutions
            </p>
            <p className="text-gray-600 italic mb-6">
              "J'ai travaillé avec de nombreuses agences auparavant, mais aucune n'a fourni le niveau de qualité et de service que cette équipe offre. Ils comprennent vraiment nos besoins et vont au-delà de nos attentes."
            </p>
            <div className="flex justify-center mt-auto">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`
}