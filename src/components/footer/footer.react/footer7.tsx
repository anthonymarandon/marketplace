import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiChevronRight, FiSend } from 'react-icons/fi';

export default function Footer7() {
  return (
    <footer className="max-w-full mx-auto">
      <div className="bg-purple-700 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-purple-200 mb-6 max-w-xl mx-auto">
            Get weekly updates on new products, special offers, and industry insights delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-3 border border-transparent rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mb-2 sm:mb-0"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-purple-800 font-semibold px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-purple-700 w-full sm:w-auto"
              aria-label="Subscribe"
            >
              Subscribe <FiSend size={18} className="inline-block ml-1" />
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4">MarketPlace</h4>
              <p className="text-sm mb-4">Connecting buyers and sellers worldwide.</p>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaYoutube size={20} /></a>
              </div>
            </div>

            <div className="mb-6 sm:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Electronics</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Fashion</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Home Goods</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Toys</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Contact Us</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Returns</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Shipping Info</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> About MarketPlace</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Careers</a></li>
                <li><a href="#" className="hover:text-white flex items-center justify-center sm:justify-start"><FiChevronRight className="mr-1 text-purple-400"/> Press</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} MarketPlace Inc. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Ad Choices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
