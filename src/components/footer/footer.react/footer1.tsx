import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

export default function Footer1() {
  return (
    <footer className="bg-white text-gray-700 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">CompanyName</h2>
            <p className="text-gray-500 mb-4">
              Creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Home</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Services</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Portfolio</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Contact</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Web Development</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> UI/UX Design</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Digital Marketing</a></li>
              <li><a href="#" className="hover:text-purple-600 flex items-center justify-center md:justify-start"><span className="text-purple-600 mr-2">&gt;</span> Consulting</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start justify-center md:justify-start">
                <FiMapPin className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <span>123 Innovation Street, Tech City, TC 54321, Country</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiPhone className="text-purple-600 mr-3" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiMail className="text-purple-600 mr-3" size={18} />
                <span>info@companyname.com</span>
              </li>
            </ul>
            <h4 className="text-md font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Subscribe to newsletter"
              >
                <FiSend size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 text-center md:text-left md:flex md:justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600">Terms of Service</a>
            <a href="#" className="hover:text-purple-600">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
