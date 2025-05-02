import Link from 'next/link';
import { componentData } from '@/listing';
import { IoCloseCircleOutline } from 'react-icons/io5';

const components = componentData.about.map(comp => ({
  id: comp.id,
  name: comp.name,
  description: comp.description,
  code: comp.code,
  category: comp.category
}));

const allComponents = Object.entries(componentData).flatMap(([category, components]) =>
  components.map(comp => ({ ...comp, category }))
);

export function getComponentById(id: string) {
  return allComponents.find(comp => comp.id === id);
}

interface ComponentListProps {
  searchQuery?: string;
}

export default function ComponentList({ searchQuery = "" }: ComponentListProps) {
  const filteredComponents = allComponents.filter(component => {
    const query = searchQuery.toLowerCase();
    return (
      component.name.toLowerCase().includes(query) ||
      component.description.toLowerCase().includes(query) ||
      component.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Bibliothèque de Composants</h1>

      <form method="get" action="/" className="mb-8 max-w-md mx-auto">
        <div className="flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              name="search"
              placeholder="Rechercher des composants..."
              defaultValue={searchQuery}
              className={`w-full px-4 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${searchQuery ? 'pr-10' : ''}`}
            />
            {searchQuery && (
              <a
                href="/"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white hover:text-gray-300 cursor-pointer flex items-center justify-center"
                aria-label="Réinitialiser la recherche"
              >
                <IoCloseCircleOutline className="h-5 w-5" />
              </a>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md font-medium transition-colors duration-200"
          >
            Rechercher
          </button>
        </div>
      </form>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredComponents.map((component) => (
          <div key={component.id} className="w-full">
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">

              <div className="aspect-video bg-gray-900 overflow-hidden border-b border-gray-700 relative">
                <div className="absolute inset-0 transform scale-[0.25] origin-top-left pointer-events-none">
                   <div className="w-[400%] h-[400%] bg-white p-4">

                     <component.component />
                   </div>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-center mb-2 text-white">
                  {component.name}
                </h3>
                <div className="text-center mb-4 flex-grow">
                  <p className={
                    component.description.toLowerCase().includes('client')
                      ? "bg-green-500/30 text-green-100 px-2 py-1 rounded-md inline-block text-sm"
                      : "bg-blue-500/30 text-blue-100 px-2 py-1 rounded-md inline-block text-sm"
                  }>{component.description}</p>
                </div>

                <div className="mt-auto flex justify-center space-x-2">
                  <Link href={`/preview?componentId=${component.id}`} passHref>
                     <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center transform hover:scale-105 shadow-md hover:shadow-lg">
                        Visualiser
                     </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}