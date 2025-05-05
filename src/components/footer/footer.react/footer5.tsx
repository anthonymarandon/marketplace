import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FiLink, FiMail } from 'react-icons/fi';

export default function Footer5() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">SimpleBrand</h2>
            <p className="text-gray-500 mb-4 text-sm">
              Clear solutions for complex problems.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600"><FaFacebookSquare size={28} /></a>
              <a href="#" className="text-gray-500 hover:text-pink-600"><FaInstagramSquare size={28} /></a>
              <a href="#" className="text-gray-500 hover:text-sky-500"><FaTwitterSquare size={28} /></a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center justify-center">
              <FiLink className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center justify-center md:justify-end">
              <FiMail className="mr-2" /> Get in Touch
            </h3>
            <ul className="space-y-1 text-gray-600">
              <li>info@simplebrand.com</li>
              <li>+1 234 567 8900</li>
              <li>123 Simple St, City, ST 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} SimpleBrand LLC. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
