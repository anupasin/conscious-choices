// src/app/order-confirmation/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const OrderConfirmationPage: React.FC = () => {
  // In a real application, you would fetch the order details from your backend
  // For now, we'll use dummy data
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
        <p className="font-bold">Thank you for your order!</p>
        <p>Your order number is: #{orderNumber}</p>
      </div>
      <p className="mb-4">We've received your order and will process it as soon as possible. You will receive an email confirmation shortly.</p>
      <Link href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;