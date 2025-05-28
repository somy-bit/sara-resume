import Image from 'next/image'
import React from 'react'

import Link from 'next/link'

export default function Header() {
    return (
        <header className='sticky  top-0 left-0 w-full flex px-5 py-3 shadow-lg bg-gray-500/60 justify-between items-center'>

            <div className='flex space-x-2 items-center '>
                <Image
                    src='/images/avatar.jpeg'
                    alt="Avatar"
                    width={45}
                    height={45}
                    className='rounded-full object-cover h-20 w-20 border-1 shadow-sm'
                />
                <h1 className='font-light text-lg'>Somayeh mousavi</h1>
            </div>

           


        </header>
    )
}

