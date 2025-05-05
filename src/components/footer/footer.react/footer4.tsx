import { FaTwitter, FaLinkedinIn, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import { FiMail, FiPhoneCall, FiMapPin, FiSend } from 'react-icons/fi';

export default function Footer4() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center justify-center md:justify-start">
                <FiMapPin className="text-indigo-400 mr-3" size={20} />
                <span>789 Tech Park, Silicon Valley, CA 98765</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiPhoneCall className="text-indigo-400 mr-3" size={20} />
                <span>+1 (555) 111-2222</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiMail className="text-indigo-400 mr-3" size={20} />
                <span>support@techcorp.io</span>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaGithubAlt size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaDribbble size={22} /></a>
            </div>
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">Navigate</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-5">Stay Updated</h3>
            <p className="mb-4 text-gray-400">Get the latest news and updates from TechCorp.</p>
            <form className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-700 rounded-md sm:rounded-l-md sm:rounded-r-none bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-2 sm:mb-0 sm:mr-0"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full sm:w-auto"
                aria-label="Subscribe to newsletter"
              >
                <FiSend size={20} className="inline-block"/>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>Copyright &copy; {new Date().getFullYear()} TechCorp Industries. All rights reserved.</p>
          <div className="mt-3 space-x-5">
            <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
            <span className="select-none">|</span>
            <a href="#" className="hover:text-indigo-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
