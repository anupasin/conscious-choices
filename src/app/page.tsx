// src/app/page.tsx
'use client'

import React from 'react'
import { useSession } from "next-auth/react"
import Image from 'next/image'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <div className="text-center bg-green-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Conscious Choices</h1>
      {status === "authenticated" && session?.user ? (
        <p className="text-xl text-green-600 mb-8">Welcome, {session.user.name}!</p>
      ) : (
        <p className="text-xl text-green-600 mb-8">Please sign in to access all features.</p>
      )}
      <p className="text-xl text-green-600 mb-8">Discover eco-friendly products from Indian artisans</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/images/sustainable-fashion.jpg"
            alt="Sustainable Fashion"
            width={250}
            height={250}
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2 mt-4">Sustainable Fashion</h2>
          <p className="text-gray-600">Explore our collection of eco-friendly clothing and accessories.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/images/natural-beauty.jpg"
            alt="Natural Beauty"
            width={250}
            height={250}
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2 mt-4">Natural Beauty</h2>
          <p className="text-gray-600">Discover handmade soaps and organic cosmetics.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <Image
            src="/images/artisanal-crafts.jpg"
            alt="Artisanal Crafts"
            width={250}
            height={250}
          />
          <h2 className="text-2xl font-semibold text-green-700 mb-2 mt-4">Artisanal Crafts</h2>
          <p className="text-gray-600">Support local craftsmen with our unique home decor items.</p>
        </div>
      </div>
    </div>
  )
}
