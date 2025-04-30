import Link from "next/link";
import { Logo } from "./Logo";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <Logo/>
            </div>
            <p className="text-gray-400">
              Your trusted partner in international trade of premium fruits, vegetables, and juices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#9AC450] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#9AC450] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/exports" className="text-gray-400 hover:text-[#9AC450] transition-colors">
                  Exports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#9AC450] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@trademates.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Trade Street, Business District, 12345</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/trademates_global" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/trademates_global" className="text-gray-400 hover:text-[#ff5347] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/trademates_global" className="text-gray-400 hover:text-[#ff4f6f] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/trademates_global" className="text-gray-400 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TradeMates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}