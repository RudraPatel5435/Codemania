import Link from 'next/link'
import React from 'react'
import { Code2, Flame } from 'lucide-react'

const Navbar = () => {
    const streak = 0
    const maxStreak = 1
    return (
        <header
            className="sticky top-0 z-50 px-4 md:px-20 py-4 flex items-center justify-between
             backdrop-blur-xl bg-neutral-950/80 border-b border-purple-500/20 shadow-lg
             transition-all duration-300"
        >
            {/* ==== Left: Logo ==== */}
            <Link
                href="/"
                className="group relative text-xl md:text-3xl text-transparent font-black 
               bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text  
               hover:scale-105 transition-transform duration-300"
            >
                <span>Codemania</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-blue-400/20 
                    rounded-lg opacity-0 group-hover:opacity-100 blur 
                    transition-opacity duration-300"></div>
            </Link>

            {/* ==== Right: Nav Links ==== */}
            <nav className="flex items-center gap-3 md:gap-6">
                {/* Problem Set pill */}
                <Link
                    href="/problemset"
                    className="group relative flex items-center gap-2 md:gap-3 
                 px-3 md:px-5 py-1.5 md:py-2 
                 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 
                 border border-purple-500/30 shadow-lg shadow-purple-500/10 backdrop-blur-sm  
                 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                    <Code2
                        size={16} // smaller icon for mobile
                        className="text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300 bg-clip-text 
                       text-transparent font-medium text-xs md:text-base">
                        Problem Set
                    </span>
                    <div className="absolute inset-0 rounded-full border border-purple-500/0 
                      group-hover:border-purple-500/30 blur-sm transition-all duration-300"></div>
                </Link>

                {/* Streak pill with hover card */}
                <div className="relative inline-block group">
                    <div
                        className="flex items-center gap-2 md:gap-3 
                   px-3 md:px-5 py-1.5 md:py-2 
                   text-white font-medium text-xs md:text-base
                   rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20
                   border border-red-500/30 shadow-lg shadow-red-500/10
                   backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                        <Flame
                            size={16}
                            className="text-red-400 group-hover:scale-125 transition-transform animate-pulse"
                        />
                        <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                            Streak: {streak}
                        </span>
                        <div className="absolute -inset-[1px] rounded-full border border-red-500/50 
                        opacity-0 group-hover:opacity-100 blur-sm transition"></div>
                    </div>

                    {/* Hover card */}
                    <div
                        className="absolute left-1/2 top-full mt-2 w-40 md:w-48 bg-neutral-900 rounded-lg shadow-lg 
                   border border-red-500/40 text-white text-center font-semibold text-xs md:text-sm 
                   py-2.5 px-3 transform -translate-x-1/2 whitespace-nowrap z-50
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-300 pointer-events-none"
                    >
                        Max Streak: {maxStreak}
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar