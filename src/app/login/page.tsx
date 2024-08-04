'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result?.error) {
        console.error(result.error)
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error('An unexpected error happened:', error)
    }
  }

  return (
    <div className="bg-green-100 min-h-screen flex flex-col justify-start items-center py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register" className="text-green-600 hover:text-green-800">
            Don't have an account? Sign up
          </Link>
        </div>
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
