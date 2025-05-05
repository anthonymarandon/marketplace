import { FaPinterestP, FaRedditAlien, FaWhatsapp, FaSnapchatGhost } from 'react-icons/fa';
import { FiCompass, FiBriefcase, FiUsers, FiLifeBuoy } from 'react-icons/fi';

export default function Footer3() {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-14 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">EcoWorld</h2>
          <div className="flex space-x-5">
            <a href="#" className="text-white hover:text-teal-200"><FaPinterestP size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaRedditAlien size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaWhatsapp size={24} /></a>
            <a href="#" className="text-white hover:text-teal-200"><FaSnapchatGhost size={24} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiCompass className="mr-2" /> Explore</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">Activities</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiBriefcase className="mr-2" /> About Us</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">The Team</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Partnerships</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiUsers className="mr-2" /> Community</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Forum</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Volunteer</a></li>
              <li><a href="#" className="hover:text-white">Ambassadors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center sm:justify-start"><FiLifeBuoy className="mr-2" /> Support</h3>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Site Map</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-400 text-center text-sm text-teal-100">
          <p>&copy; {new Date().getFullYear()} EcoWorld Adventures. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
