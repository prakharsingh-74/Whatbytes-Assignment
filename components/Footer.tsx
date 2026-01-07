import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters */}
          <div>
            <h3 className="font-bold text-lg mb-3">Filters</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300 transition">
                  All
                </Link>
              </li>
              <li>
                <Link href="/?category=Electronics" className="hover:text-gray-300 transition">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a5490] p-2 rounded-full hover:bg-[#005bb5] transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a5490] p-2 rounded-full hover:bg-[#005bb5] transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a5490] p-2 rounded-full hover:bg-[#005bb5] transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center">
          © 2024 American
        </div>
      </div>
    </footer>
  );
}
