import { FaLinkedin, FaBehanceSquare, FaMedium } from 'react-icons/fa';
import { FiLayers, FiHelpCircle, FiSend } from 'react-icons/fi';

export default function Footer6() {
  return (
    <footer className="bg-slate-100 text-slate-700 py-12 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">CreativeHub</h2>
            <p className="text-slate-600 mb-5">
              A platform for designers and creators to showcase work and connect.
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="w-full sm:w-auto flex-grow px-4 py-2 border border-slate-300 rounded-md sm:rounded-l-md sm:rounded-r-none bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full sm:w-auto"
                aria-label="Subscribe"
              >
                <FiSend size={20} />
              </button>
            </form>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center justify-center md:justify-start"><FiLayers className="mr-2 text-pink-600" /> Product</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Features</a></li>
              <li><a href="#" className="hover:text-pink-600">Integrations</a></li>
              <li><a href="#" className="hover:text-pink-600">Pricing</a></li>
              <li><a href="#" className="hover:text-pink-600">Changelog</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center justify-center md:justify-start"><FiHelpCircle className="mr-2 text-pink-600" /> Resources</h3>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Support</a></li>
              <li><a href="#" className="hover:text-pink-600">Blog</a></li>
              <li><a href="#" className="hover:text-pink-600">Community</a></li>
              <li><a href="#" className="hover:text-pink-600">API Docs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-slate-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} CreativeHub. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-pink-600">Terms</a>
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <div className="flex space-x-3">
              <a href="#" className="text-slate-500 hover:text-pink-600"><FaLinkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-pink-600"><FaBehanceSquare size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-pink-600"><FaMedium size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
