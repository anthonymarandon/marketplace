import { Component } from "@/types/components";
import Footer8 from "./footer.react/footer8";

export const componentFooter8: Component = {
  id: 'footer8',
  name: 'Footer 8',
  description: 'Server Component',
  category: 'footer',
  component: Footer8,
  code: `import { FaTiktok, FaTwitch, FaVimeoV, FaSteam } from 'react-icons/fa';
import { FiDatabase, FiTerminal, FiShield } from 'react-icons/fi';

export default function Footer8() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-14 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">DataCorp</h2>
            <p className="text-gray-600 mb-5 text-sm">
              Insights and analytics for a data-driven world.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900"><FaTiktok size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-purple-600"><FaTwitch size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-sky-500"><FaVimeoV size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><FaSteam size={20} /></a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center md:justify-start"><FiDatabase className="mr-2 text-blue-600"/> Products</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Analytics Suite</a></li>
              <li><a href="#" className="hover:text-blue-600">Data API</a></li>
              <li><a href="#" className="hover:text-blue-600">Reporting Tools</a></li>
              <li><a href="#" className="hover:text-blue-600">Cloud Storage</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center md:justify-start"><FiTerminal className="mr-2 text-blue-600"/> Developers</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-600">SDKs</a></li>
              <li><a href="#" className="hover:text-blue-600">Status Page</a></li>
              <li><a href="#" className="hover:text-blue-600">Open Source</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center md:justify-start"><FiShield className="mr-2 text-blue-600"/> Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-xs text-gray-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} DataCorp Analytics Ltd. All rights reserved.</p>
          <p>Registered Office: 1 Infinite Loop, Data City, DC 10101</p>
        </div>
      </div>
    </footer>
  );
}
`
};