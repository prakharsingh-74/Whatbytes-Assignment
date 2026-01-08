"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FiltersSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const categories = searchParams.get("category")?.split(",").filter(v => v) || [];
  const brands = searchParams.get("brand")?.split(",").filter(v => v) || [];
  const priceMax = searchParams.get("priceMax") || "1000";

  const handleCategoryChange = (cat: string) => {
    const newCategories = categories.includes(cat)
      ? categories.filter((c) => c !== cat)
      : [...categories, cat];
    updateURL({ category: newCategories });
  };

  const handleBrandChange = (brand: string) => {
    const newBrands = brands.includes(brand)
      ? brands.filter((b) => b !== brand)
      : [...brands, brand];
    updateURL({ brand: newBrands });
  };

  const handlePriceChange = (newPrice: string) => {
    updateURL({ priceMax: newPrice });
  };

  const updateURL = (overrides: { category?: string[]; brand?: string[]; priceMax?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Handle Category
    if (overrides.category !== undefined) {
      if (overrides.category.length > 0) {
        params.set("category", overrides.category.join(","));
      } else {
        params.delete("category");
      }
    }

    // Handle Brand
    if (overrides.brand !== undefined) {
      if (overrides.brand.length > 0) {
        params.set("brand", overrides.brand.join(","));
      } else {
        params.delete("brand");
      }
    }
    
    // Handle Price
    if (overrides.priceMax !== undefined) {
      if (overrides.priceMax !== "1000") {
        params.set("priceMax", overrides.priceMax);
      } else {
        params.delete("priceMax");
      }
    }
    
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <aside className="bg-[#1a5490] text-white p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2">
            {["Electronics", "Clothing", "Home"].map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer hover:opacity-90">
                <input
                  type="checkbox"
                  checked={categories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="w-4 h-4 accent-white rounded cursor-pointer"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Brand</h3>
          <div className="space-y-2">
            {["Nike", "Sony", "Patagonia", "Apple", "Ray-Ban", "Canon", "Adidas", "Samsung"].map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer hover:opacity-90">
                <input
                  type="checkbox"
                  checked={brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="w-4 h-4 accent-white rounded cursor-pointer"
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>
        </div>

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

    </div>
  );
}
