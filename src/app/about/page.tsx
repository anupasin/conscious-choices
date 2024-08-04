// src/app/about/page.tsx
'use client'

import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="text-center bg-green-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">About Conscious Choices</h1>
      <p className="text-xl text-green-600 mb-8">Empowering Sustainable Living with Purpose</p>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-12">
        <Image
          src="/images/about-us.jpg"
          alt="About Conscious Choices"
          width={500}
          height={300}
          className="rounded-lg shadow-md mb-8 md:mb-0"
        />
        <div className="max-w-xl text-left">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At Conscious Choices, we believe in the power of sustainable living. Our mission is to connect conscious consumers with eco-friendly products crafted by talented artisans. We aim to make a positive impact on the environment and communities by promoting sustainability and ethical practices.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Values</h2>
          <ul className="text-gray-600 list-disc list-inside mb-6">
            <li className="mb-2">**Sustainability**: Committed to reducing environmental impact.</li>
            <li className="mb-2">**Quality**: Offering high-quality products that are both stylish and sustainable.</li>
            <li className="mb-2">**Community**: Supporting local artisans and fostering a sense of community.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is a world where sustainable living is accessible and embraced by everyone. We strive to inspire and educate individuals to make conscious choices that benefit both themselves and the planet.
          </p>
        </div>
      </div>
    </div>
  )
}
