// src/app/cart/page.tsx
'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
            <Link href="/checkout" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded inline-block hover:bg-blue-600">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;