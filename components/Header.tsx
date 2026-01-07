"use client";

import Link from "next/link";
import { Search, ShoppingCart, User} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/");
    }
  };

  return (
    <header className="bg-[#005bb5] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </form>

        {/* Cart and Profile */}
        <div className="flex items-center gap-6">
          <Link href="/cart" className="relative flex items-center gap-2 hover:text-gray-200 transition">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="hover:text-gray-200 transition">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
