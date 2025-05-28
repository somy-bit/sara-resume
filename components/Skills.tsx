import { Atom, Cloud, CloudCog, Code, Code2Icon, Database, Layers2, Layout, Leaf, MousePointerClick, Paintbrush, Server, ServerCogIcon, Smartphone, SmartphoneIcon, Wind } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div className='flex space-y-8 md:max-w-2xl md:flex-1 items-center justify-center rounded-md shadow-sm bg-white pb-4  md:p-4 flex-col '>
            <div className='flex flex-col space-y-3'>
                <p className='border-b p-3 border-b-gray-300 text-center'>Fronted Technologies :</p>

                <ul className='grid grid-cols-4 md:grid-cols-3 gap-3'>
                    <li className='flex  flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Code color='blue' size={20} /><p>Html</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Paintbrush color='red' size={20} /><p>CSS</p></li>
                    <li className='flex  flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Layout color='orange' size={20} /><p>Bootstrap</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><MousePointerClick size={20} color="maroon" /><p>JQuery</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Atom color="aqua" size={20} /><p>ReactJs</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Server color="gray" size={20} /><p>NextJs</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Wind size={20} color="blue" /><p>Tailwindcss</p></li>
                    <li >...</li>
                </ul>
            </div>

            <div className='flex flex-col space-y-3'>
                <p className='text-center border-b p-3 border-b-gray-300'>Backend Technologies :</p>
                <ul className='grid grid-cols-4 md:grid-cols-3 gap-3'>
                    <li className='flex  flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Code2Icon color='blue' size={20} /><p>Php</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Layers2 color='red' size={20} /><p>Laravel</p></li>
                    <li className='flex  flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><ServerCogIcon color='orange' size={20} /><p>NodeJs</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Database size={20} color="maroon" /><p>Sql</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Cloud color="aqua" size={20} /><p>Azure</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><CloudCog color="blue" size={20} /><p>Amazon</p></li>
                    <li className='flex flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><Leaf size={20} color="green" /><p>MongoDB</p></li>
                    <li >...</li>
                </ul>
            </div>

            <div className='flex flex-col space-y-3'>
                <p className='border-b p-3 border-b-gray-300 text-center'>Mobile Applications :</p>
                <ul className='flex items-center justify-center'>
                    <li className='flex  flex-row space-x-2 p-2 bg-gray-300/70 shadow-sm rounded-md cursor-pointer '><SmartphoneIcon size={20} color="black" /><p>React native</p></li>
                </ul>
            </div>
         
        </div>
    )
}

export default Skills