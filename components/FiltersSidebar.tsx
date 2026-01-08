"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [priceMax, setPriceMax] = useState(searchParams.get("priceMax") || "1000");

  useEffect(() => {
    setCategory(searchParams.get("category") || "All");
    setPriceMax(searchParams.get("priceMax") || "1000");
  }, [searchParams]);

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    updateURL(newCategory, priceMax);
  };

  const handlePriceChange = (newPrice: string) => {
    setPriceMax(newPrice);
    updateURL(category, newPrice);
  };

  const updateURL = (cat: string, price: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (cat !== "All") {
      params.set("category", cat);
    } else {
      params.delete("category");
    }
    
    if (price !== "1000") {
      params.set("priceMax", price);
    } else {
      params.delete("priceMax");
    }
    
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* Filters Section - Blue Box */}
      <aside className="bg-[#1a5490] text-white p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            {["All", "Electronics", "Clothing", "Home"].map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer hover:opacity-90">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-4 h-4 accent-white cursor-pointer"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div>
          <h3 className="font-semibold mb-3">Price</h3>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceMax}
              onChange={(e) => handlePriceChange(e.target.value)}
              className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer accent-white slider"
              style={{
                background: `linear-gradient(to right, white 0%, white ${(parseInt(priceMax) / 1000) * 100}%, rgba(255,255,255,0.3) ${(parseInt(priceMax) / 1000) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
            <div className="flex justify-between text-sm">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Cagroy Section - White Background */}
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Cagroy</h3>
          <div className="space-y-2">
            {["All", "Electronics", "Clothing", "Home"].map((cat) => (
              <label key={`cagroy-${cat}`} className="flex items-center gap-3 cursor-pointer hover:opacity-70">
                <input
                  type="radio"
                  name="cagroy"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Input */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Price</h3>
          <input
            type="number"
            value={priceMax}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="10000"
            placeholder="5000"
          />
        </div>
      </div>
    </div>
  );
}
