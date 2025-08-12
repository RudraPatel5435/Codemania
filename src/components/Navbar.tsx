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
        <header className="sticky top-0 z-50 px-6 md:px-20 py-4 flex items-center justify-between
                        backdrop-blur-md bg-neutral-900/60 border-b border-neutral-800 shadow-sm">

            {/* ==== Left: Logo ==== */}
            <Link
                href="/"
                className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition"
            >
                Codemania
            </Link>

            {/* ==== Middle: Nav Links ==== */}
            <nav className="hidden md:flex gap-6">
                <Link
                    href="/problemset"
                    className="group relative flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white transition"
                >
                    <span>🧩 Problem Set</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link
                    href="/leaderboard"
                    className="group relative flex items-center gap-2 text-lg font-medium text-gray-300 hover:text-white transition"
                >
                    <span>🏆 Leaderboard</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

            {/* ==== Right: Auth Buttons ==== */}
            <div className="flex items-center gap-4">
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="px-4 py-2 rounded-md border border-neutral-600 text-gray-300 hover:bg-neutral-800 transition">
                            Sign In
                        </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <button className="bg-[#6c47ff] hover:bg-[#5b3be0] rounded-md font-medium px-4 py-2 transition text-white">
                            Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>

                <SignedIn>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: 'w-12 h-12',
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </header>
    )
}

export default Navbar
