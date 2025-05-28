import React from 'react'

function Experiance() {
    return (
        <div className='flex flex-row space-x-4 px-3'>
            <div className='flex flex-col space-y-3'>
                <p className='text-xs text-gray-600'><span className='font-semibold text-black text-sm'>Location :</span> Zee Pay ,Istanbul Turkey</p>
                <p className='text-xs text-gray-600'><span className='font-semibold text-black text-sm'>From :</span> 2021-05</p>
                <p className='text-xs text-gray-600'><span className='font-semibold text-black text-sm'>To : </span>2022-05</p>
            </div>
            <div className='border-l border-l-gray-500/50 pl-8 flex flex-col space-y-4'>
                <div>
                    <p className='font-semibold text-blue-800'>Job Title : </p>
                    <p className='font-light text-gray-700'>Junior Web Developer</p>
                </div>
                <div><p className='font-semibold text-blue-800'>Tasks :</p>
                    <ul className='font-light text-gray-700 list-disc'>
                        <li>Coding Website with ReactJs</li>
                        <li>Enhance user experience by implementing
                            responsive web design and optimizing website
                            performance</li>
                        <li>Supporting backecnd with Nodejs</li>
                        <li>Developed custom web applications, resulting in tailored solutions for client needs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experiance