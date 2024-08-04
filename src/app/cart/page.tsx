// src/app/cart/page.tsx
'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { dummyProducts } from '@/lib/dummyData';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto p-8 bg-green-100 min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl text-green-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => {
            const product = dummyProducts.find((p) => p.id === item.id);
            return (
              <div key={item.id} className="flex items-center justify-between border-b border-green-300 py-4">
                <div className="flex items-center">
                  <Image
                    src={product?.imageUrl || ''}
                    alt={product?.name || ''}
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold text-green-700">{item.name}</h2>
                    <p className="text-xl text-green-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="bg-green-200 text-green-700 px-4 py-2 rounded"
                  >
                    -
                  </button>
                  <span className="mx-4 text-xl text-green-600">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-green-200 text-green-700 px-4 py-2 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-8 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="mt-8">
            <p className="text-2xl font-bold text-green-800">Total: ${getCartTotal().toFixed(2)}</p>
            <Link href="/checkout" className="mt-4 bg-green-600 text-white py-2 px-4 rounded inline-block hover:bg-green-700">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
