import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project({ id,title, image, desc }: { id:number,title: string, image: string, desc: string }) {
    return (
        <div className='flex flex-col p-3 bg-white text-gray-600'>
            <div className='flex flex-col space-y-2'>
               <Link
               className='w-full'
               href={`/projects/${id}`}>
                  <Image
                    src={image}
                    alt='project image'
                    width={150}
                    height={150}
                    className='w-full px-0'
                />
               </Link>
             
                 <div>
                    <h1 className='font-semibold text-gray-700'>{title}</h1>
                </div>
            </div>
            <div className='text-xs font-light text-gray-500'>{desc}</div>
        </div>
    )
}

export default Project