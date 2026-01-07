"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/types";

export default function Home() {
  const searchParams = useSearchParams();
  
  const category = searchParams.get("category") || "All";
  const priceMax = parseInt(searchParams.get("priceMax") || "1000");
  const searchQuery = searchParams.get("search") || "";

  // Filter products based on URL parameters
  const filteredProducts = products.filter((product: Product) => {
    // Category filter
    if (category !== "All" && product.category !== category) {
      return false;
    }
    
    // Price filter
    if (product.price > priceMax) {
      return false;
    }
    
    // Search filter (matches name or description)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description.toLowerCase().includes(query);
      if (!nameMatch && !descMatch) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <FiltersSidebar />
        </div>
        
        {/* Product Grid */}
        <div className="lg:col-span-3">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
