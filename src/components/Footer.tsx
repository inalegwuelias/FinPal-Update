import React from 'react';
import { DollarSign, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">FinPal</h3>
                <p className="text-sm text-gray-400">Your Money Companion</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Making financial literacy simple and practical for young professionals, students, 
              and small business owners across Nigeria and Africa.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span>Made with love for financial freedom</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Budget Calculator</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Savings Goals</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Ask FinPal</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Learn Centre</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Topics</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Understanding Inflation</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Naira vs Dollar Savings</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Investment Basics</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">Banking Tips</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-green-400" />
                <span>hello@finpal.ng</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span>+234 800 FINPAL</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-green-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FinPal. Educational content only - Not financial advice.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-medium">
            💡 Remember: This is educational content, not financial advice. Always do your own research!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;