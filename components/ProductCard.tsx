"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-lg font-bold text-gray-900 mb-3">{formatPrice(product.price)}</p>
          
          {product.rating && (
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating!)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#0066cc] text-white py-2 rounded-md hover:bg-[#005bb5] transition-colors font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
