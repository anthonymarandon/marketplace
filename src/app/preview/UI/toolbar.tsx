import Link from 'next/link';
import { FaCode, FaEye } from 'react-icons/fa';

interface ToolbarProps {
  showCode: boolean;
  toggleShowCode: () => void;
}

export default function Toolbar({ showCode, toggleShowCode }: ToolbarProps) {
  return (
    <div className="bg-gray-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold text-white">Prévisualisation</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleShowCode}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center"
          title={showCode ? "Afficher le composant" : "Afficher le code"}
        >
          {showCode ? (
            <FaEye className="mr-2" />
          ) : (
            <FaCode className="mr-2" />
          )}
          {showCode ? 'Composant' : 'Code'}
        </button>

        <Link href="/" passHref>
          <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200">
            Retour à la liste
          </button>
        </Link>
      </div>
    </div>
  );
}