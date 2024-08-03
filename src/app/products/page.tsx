// src/app/products/page.tsx

import { dummyProducts } from '@/lib/dummyData';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 bg-green-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div className="mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={250}
                height={250}
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
