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
    <aside className="bg-[#1a5490] text-white p-6 rounded-lg h-fit sticky top-4">
      <h2 className="text-xl font-bold mb-6">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={category === cat}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-4 h-4 accent-white"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceMax}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full accent-white"
          />
          <div className="flex justify-between text-sm">
            <span>0</span>
            <span>{priceMax}</span>
          </div>
        </div>
      </div>

      {/* Cagroy Section (matching design typo) */}
      <div>
        <h3 className="font-semibold mb-3">Cagroy</h3>
        <div className="space-y-2">
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <label key={`cagroy-${cat}`} className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
              <input
                type="radio"
                name="cagroy"
                value={cat}
                checked={category === cat}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-4 h-4 accent-white"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Input (from design) */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">Price</h3>
        <input
          type="number"
          value={priceMax}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="w-24 px-2 py-1 text-gray-800 rounded"
          min="0"
          max="10000"
        />
      </div>
    </aside>
  );
}
