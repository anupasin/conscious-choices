// src/app/products/[id]/page.tsx
'use client';

import { dummyProducts } from '@/lib/dummyData';
import { useCart } from '../../../context/CartContext';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const product = dummyProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 bg-green-100 min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.longDescription}</p>
            <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          </div>
          <div>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
