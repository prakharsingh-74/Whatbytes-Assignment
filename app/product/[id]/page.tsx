"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Star, Minus, Plus } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-600">Home</Link> / <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
     
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="relative w-full h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Thumbnails placeholder to feel like a carousel */}
          <div className="flex gap-4 mt-6 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-20 h-20 rounded-lg border-2 ${i === 1 ? 'border-blue-600' : 'border-gray-100'} p-2 cursor-pointer hover:border-blue-300 transition`}>
                <div className="relative w-full h-full">
                  <Image src={product.image} alt={product.name} fill className="object-contain opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            {product.rating && (
              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-yellow-700">{product.rating}</span>
                <span className="text-yellow-600 text-sm">(124 reviews)</span>
              </div>
            )}
          </div>

          <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Product Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-auto space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Select Quantity</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl p-1 shadow-sm">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-bold w-12 text-center text-gray-900">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-600 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  In stock and ready to ship
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-200 font-bold text-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-3"
              >
                <Plus className="w-6 h-6" />
                Add to Cart
              </button>
            </div>

            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 font-medium transition gap-2">
              <Minus className="rotate-90 w-4 h-4" /> {/* Simple arrow mock */}
              Back to Catalog
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-16 pt-16 border-t border-gray-100">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <p className="text-gray-500">What our customers have to say about this product</p>
          </div>
          <button className="bg-white border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all">
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="font-bold text-lg mb-2">
                {i === 1 ? "Absolutely Amazing!" : i === 2 ? "High Quality Product" : "Fast Shipping"}
              </h3>
              <p className="text-gray-600 mb-6 italic">
                {i === 1 
                  ? "I've been using this for a week now and the quality is beyond my expectations. Definitely recommended!" 
                  : i === 2 
                  ? "Great value for money. The material feels premium and it looks exactly like the pictures." 
                  : "The delivery was surprisingly fast and the packaging was excellent. Great experience overall."}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {i === 1 ? "JS" : i === 2 ? "MD" : "AK"}
                </div>
                <div>
                  <div className="font-bold">
                    {i === 1 ? "John Smith" : i === 2 ? "Maria Davis" : "Alex Kumar"}
                  </div>
                  <div className="text-xs text-gray-400">Verified Purchase</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
