// src/app/checkout/page.tsx
'use client';

import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';
import { dummyProducts } from '@/lib/dummyData';

const CheckoutPage: React.FC = () => {
  const { cart, clearCart } = useContext(CartContext) || { cart: [], clearCart: () => {} }; // Added default values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { cart, formData });
    clearCart();
    // Redirect to order confirmation page (to be implemented)
    // router.push('/order-confirmation');
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8 bg-green-100 min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-green-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-green-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-green-600">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-green-600">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-green-600">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-green-600">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full border border-green-300 rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded inline-block hover:bg-green-700"
            >
              Place Order
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Order Summary</h2>
          {cart.map((item) => {
            const product = dummyProducts.find((p) => p.id === item.id);
            return (
              <div key={item.id} className="flex items-center justify-between border-b border-green-300 py-2">
                <div className="flex items-center">
                  <Image
                    src={product?.imageUrl || ''}
                    alt={product?.name || ''}
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-green-700">{item.name}</h3>
                    <p className="text-green-600">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="text-green-600">${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            );
          })}
          <div className="mt-4">
            <p className="text-xl font-bold text-green-800">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
