import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Experiance from './Experiance'
import Education from './Education'
import Image from 'next/image'
import Project from './Project'

export type Props={

  id:number;
  title:string;
  image:string[];
  desc:string;
  info:string[];
  url:string;
}

const projects : Props[]= [
  {
     url:'',
    id:1,
    title:"trello clone",
    image:['/images/trello.png'],
    desc:'a clone from trello',
    info:[]
  },
    {
       url:'',
    id:2,
    title:"airbnb clone",
    image:['/images/airbnb.png','/images/airbnb2.png','/images/airbnb3.png'],
    desc:'a partly clone from airbnb website',
    info:[]
  },
    {
       url:'',
    id:3,
    title:"linkedIn clone",
    image:['/images/linkedin.png','/images/linked2.png','/images/linked3.png'],
    desc:'a simple clone from some parts of linkedIn app',
    info:[]
    }
]



function Main() {
  return (
    <div className='flex flex-col space-y-6 scrollbar-hide overflow-y-auto w-screen text-gray-900 text-sm bg-[#f6f6f6] pb-24  lg:max-w-6xl mx-auto py-5 px-4'>
     
        <AboutMe />
    
     

      <div className='w-full py-3  bg-gray-400/50'><p className='font-bold text-center text-black text-xl'>Skills</p></div>
      <div className='md:flex md:space-x-3 md:items-center'> 
        <Skills />
       <div className='hidden md:flex bg-transparent'>
               <Image 
               src="/images/tech.jpg" 
               alt="tech image" 
               width={90} 
               height={90}
               className='h-96 w-96'
               />
            </div>
      </div>
      
      <div className='w-full py-3  bg-gray-400/50'><p className='font-bold text-center text-black text-xl'>Experiences</p></div>
      <Experiance />
      <div className='w-full py-3  bg-gray-400/50'><p className='font-bold text-center text-black text-xl'>Educations</p></div>
      <Education />
          <div className='w-full py-3  bg-gray-400/50'><p className='font-bold text-center text-black text-xl'>Projects</p></div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
              projects.map((proj)=>(

                <Project 
                key={proj.id}
                image={proj.image[0]}
                title={proj.title}
                desc={proj.desc}
                id={proj.id}
                />
              )

              )
            }
          </div>
    </div>
  )
}

export default Main