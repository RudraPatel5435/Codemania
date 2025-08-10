import Link from 'next/link'
import React from 'react'
import ThemeToggleButton from '../ui/theme-toggle-button'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-30 py-4'>
            <Link href={'/'} className='flex justify-center text-5xl font-semibold'>Codemania</Link>
            <ThemeToggleButton />
        </div>
    )
}

export default Navbar