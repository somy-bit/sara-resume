import { Home, Mail, PhoneCall } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='flex px-5  flex-1 bg-slate-600 pb-20'>
            <div className='flex-1 md:max-w-6xl flex flex-col justify-center items-center space-y-4 pt-6 text-gray-100'>
                <div><h1 className='font-light text-lg'>Contact Me</h1></div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row space-x-5  items-center'>
                        <div className='flex flex-row space-x-2'>
                            <PhoneCall size={20} color="green" />
                            <p>Phone :</p>
                        </div>
                        <div className=' flex'><p className='text-sm font-light'>6042199382</p></div>
                    </div>

                    <div className='flex space-x-5 items-center' >

                        <div className='flex space-x-2'>
                            <Mail size={20} color="red" />
                            <p>email</p>
                        </div>
                        <div><p className='text-sm font-light'>sm.moosavi.sm@gmail.com</p></div>
                    </div>

                    <div className='flex space-x-5 items-center'>
                        <div className='flex space-x-2'>
                            <Home size={20} color='blue' />
                            <p>Address</p>
                        </div>
                        <div>
                            <p className='text-sm font-light'>Richmond BC</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer