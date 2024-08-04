// src/app/blog/page.tsx
'use client'

import React from 'react'
import Image from 'next/image'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  author: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Rise of Sustainable Fashion",
    excerpt: "Explore how sustainable fashion is transforming the industry and leading to a more eco-conscious future.",
    image: "/images/blog-sustainable-fashion.jpg",
    author: "Jane Doe",
    date: "August 1, 2024",
  },
  {
    id: 2,
    title: "Benefits of Natural Beauty Products",
    excerpt: "Learn why natural beauty products are gaining popularity and how they benefit your skin and the environment.",
    image: "/images/blog-natural-beauty.jpg",
    author: "John Smith",
    date: "July 20, 2024",
  },
  {
    id: 3,
    title: "Supporting Local Artisans",
    excerpt: "Discover the impact of supporting local artisans and how it helps preserve traditional crafts.",
    image: "/images/blog-artisanal-crafts.jpg",
    author: "Emily Johnson",
    date: "July 10, 2024",
  },
]

export default function Blog() {
  return (
    <div className="text-center bg-green-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Conscious Choices Blog</h1>
      <p className="text-xl text-green-600 mb-8">Insights and stories on sustainable living and eco-friendly products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm">{post.author}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
