import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';

export default function Footer9() {
  const LogoPlaceholder = () => (
    <div className="w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center text-white font-bold text-xl mx-auto md:mx-0">
      Logo
    </div>
  );

  return (
    <footer className="bg-white text-gray-800 py-10 px-4 sm:px-6 lg:px-8 border-t max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <LogoPlaceholder />
            <p className="text-gray-500 text-sm mt-3">
              &copy; {new Date().getFullYear()} FinTech Solutions. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-gray-600">
            <a href="#" className="hover:text-blue-600">Platform</a>
            <a href="#" className="hover:text-blue-600">Solutions</a>
            <a href="#" className="hover:text-blue-600">Company</a>
            <a href="#" className="hover:text-blue-600">Resources</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-700"><FaLinkedinIn size={22} /></a>
            <a href="#" className="text-gray-500 hover:text-sky-500"><FaTwitter size={22} /></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><FaGithub size={22} /></a>
            <a href="#" className="text-gray-500 hover:text-green-600"><FiMessageSquare size={22} /></a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center md:text-right text-xs text-gray-400">
          <a href="#" className="hover:text-gray-700 mx-2">Privacy Policy</a>
          <span className="select-none">·</span>
          <a href="#" className="hover:text-gray-700 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
