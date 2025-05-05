import { FaRegLightbulb, FaRegComments, FaRegCheckCircle } from 'react-icons/fa';
import { FiArrowRight, FiInfo } from 'react-icons/fi';

export default function CTA3() {
  const imageUrl = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="bg-gray-100 p-8 md:p-16 rounded-3xl max-w-5xl mx-auto shadow font-sans text-center">

      <img
        src={imageUrl}
        alt="Bureau avec des éléments de design"
        className="rounded-2xl shadow-md w-full max-w-3xl mx-auto object-cover mb-10"
        style={{ aspectRatio: '16/7' }} 
      />

      <FaRegLightbulb className="text-yellow-500 text-5xl mx-auto mb-4" />

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
        Simplifiez Votre <span className="text-gray-600">Workflow Créatif</span>
      </h1>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Concentrez-vous sur la création, nous nous occupons du reste. Des outils intuitifs pour donner vie à vos idées sans effort.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-transparent border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out">
          Explorer les Fonctionnalités <FiArrowRight />
        </button>
        <button className="bg-transparent border-2 border-gray-400 hover:bg-gray-200 text-gray-600 font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition duration-300 ease-in-out">
          Voir les Tarifs <FiInfo />
        </button>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-gray-700">
        <div className="flex items-center gap-3">
          <FaRegCheckCircle className="text-green-500 text-xl" />
          <span>Interface Intuitive</span>
        </div>
        <div className="flex items-center gap-3">
          <FaRegComments className="text-blue-500 text-xl" />
          <span>Support Réactif</span>
        </div>
        <div className="flex items-center gap-3">
          <FaRegLightbulb className="text-yellow-500 text-xl" />
          <span>Mises à jour régulières</span>
        </div>
      </div>

    </div>
  );
}
