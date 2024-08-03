// src/components/AuthButton.tsx
'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button onClick={() => signOut()} className="hover:bg-green-700 px-3 py-2 rounded-md">
        Sign out
      </button>
    )
  }
  return (
    <button onClick={() => signIn()} className="hover:bg-green-700 px-3 py-2 rounded-md">
      Sign in
    </button>
  )
}