import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer10() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 text-center sm:text-left">
          <div>
            <h5 className="font-semibold text-gray-200 mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-200 mb-3">Product</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Demo</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-200 mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-200 mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white"><FiFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FiInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FiTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FiLinkedin size={24} /></a>
        </div>

        <div className="text-center text-xs border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Minimalist Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
