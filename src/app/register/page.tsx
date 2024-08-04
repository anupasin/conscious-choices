'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      if (response.ok) {
        router.push('/login')
      } else {
        const error = await response.text()
        console.error('Registration failed:', error)
      }
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-start items-center py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Join Conscious Choices</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-green-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-green-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            Create Account
          </button>
        </form>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Discover Conscious Choices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/images/sustainable-fashion.jpg"
              alt="Sustainable Fashion"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm text-green-700 mt-2">Sustainable Fashion</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/images/natural-beauty.jpg"
              alt="Natural Beauty"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm text-green-700 mt-2">Natural Beauty</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/images/artisanal-crafts.jpg"
              alt="Artisanal Crafts"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm text-green-700 mt-2">Artisanal Crafts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
