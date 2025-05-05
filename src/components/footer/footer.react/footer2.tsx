import { FaGithub, FaSlack, FaDiscord, FaYoutube } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export default function Footer2() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8 rounded-t-lg shadow-inner max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">DevSolutions</h2>
            <p className="text-gray-600 mb-4">
              Engineering robust software for the modern web.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-700"><FaGithub size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><FaSlack size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><FaDiscord size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><FaYoutube size={22} /></a>
            </div>
          </div>

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Documentation</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Blog</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Tutorials</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> About Us</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Careers</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Press Kit</a></li>
              <li><a href="#" className="hover:text-blue-700 flex items-center justify-center md:justify-start"><span className="text-blue-700 mr-2">→</span> Partners</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start justify-center md:justify-start">
                <FiMapPin className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={18} />
                <span>456 Code Avenue, Dev City, DC 67890, World</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiPhone className="text-blue-700 mr-3" size={18} />
                <span>+1 (555) 987-6543</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiMail className="text-blue-700 mr-3" size={18} />
                <span>contact@devsolutions.tech</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FiClock className="text-blue-700 mr-3" size={18} />
                <span>Mon - Fri, 9am - 5pm PST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} DevSolutions Inc. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-blue-700">Legal Notice</a>
            <a href="#" className="hover:text-blue-700">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
