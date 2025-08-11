import Link from 'next/link'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-6 md:px-20 py-4 flex items-center justify-between bg-neutral-900 border-b border-neutral-700">
      
      {/* ==== Left: Logo ==== */}
      <Link 
        href="/" 
        className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition"
      >
        Codemania
      </Link>

      {/* ==== Middle: Nav Links ==== */}
      <nav className="hidden md:flex gap-8">
        <Link
          href="/problemset"
          className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
        >
          Problem Set
        </Link>
        <Link
          href="/leaderboard"
          className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
        >
          Leaderboard
        </Link>
      </nav>

      {/* ==== Right: Auth Buttons ==== */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded-md border border-gray-500 text-gray-300 hover:bg-gray-700 transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] hover:bg-[#5b3be0] rounded-md font-medium px-4 py-2 transition text-white">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-12 h-12', // consistent sizing
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}

export default Navbar
