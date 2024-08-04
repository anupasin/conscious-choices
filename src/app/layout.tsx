'use client';

import '@/app/globals.css'
import Link from 'next/link'
import { CartProvider } from '../context/CartContext'
import CartIcon from '@/components/CartIcon'
import { Providers } from "../components/Providers"
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <CartProvider>
            <header className="bg-green-800 text-white">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl">Conscious Choices</Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-4">
                      <Link href="/products" className="hover:bg-green-700 px-3 py-2 rounded-md">Products</Link>
                      <Link href="/blog" className="hover:bg-green-700 px-3 py-2 rounded-md">Blog</Link>
                      <Link href="/about" className="hover:bg-green-700 px-3 py-2 rounded-md">About</Link>
                      <Link href="/login" className="hover:bg-green-700 px-3 py-2 rounded-md">Sign In</Link>
                      <Link href="/register" className="hover:bg-green-700 px-3 py-2 rounded-md">Register</Link>
                      <CartIcon />
                    </div>
                  </div>
                  <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                      {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                  </div>
                </div>
                {isMenuOpen && (
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link href="/products" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                      <Link href="/blog" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                      <Link href="/about" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                      <Link href="/login" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
                      <Link href="/register" className="hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
                      <CartIcon />
                    </div>
                  </div>
                )}
              </nav>
            </header>
            <main className="flex-grow max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
              {children}
            </main>
            <footer className="bg-green-800 text-white">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p>&copy; 2024 Conscious Choices. All rights reserved.</p>
              </div>
            </footer>
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}