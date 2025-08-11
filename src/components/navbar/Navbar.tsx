import Link from 'next/link'
import {
    ClerkProvider,
    SignInButton,
    SignOutButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import React from 'react'

const Navbar = () => {
    return (
        <div className='px-40 py-5 flex items-center justify-between'>
            <Link href={'/'} className='flex justify-center text-5xl font-semibold'>Codemania</Link>
            <div className="">
                <Link href={'/problemset'} className='text-2xl font-medium'>Problem Set</Link>
            </div>
            <div className="flex justify-end items-center p-4 gap-4 h-16">
                <SignedOut>
                    <SignInButton />
                    <SignUpButton>
                        <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">Sign up</button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar