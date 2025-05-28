import { Props } from '@/components/Main';
import Project from '@/components/Project'
import Slider from '@/components/Slider';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'





const projects: Props[] = [
  {
    url:'https://trello-clone-five-sepia.vercel.app/',
    id: 1,
    title: "trello clone",
    image: ['/images/trello.png'],
    desc: 'a clone from trello',
    info: ['an app that implements draggable divs ',
      'ability to add images to the TODO list with a title and description ',
      'ability to ad remove ToDo cards',
      'you can add progress status toyour cards : Todo ,in Progress ,Done',
      'you can seacrh through your list by a keyword']
  },
  {
     url:'https://airbnb-clone-flax-gamma.vercel.app/',
    id: 2,
    title: "airbnb clone",
    image: ['/images/airbnb.png', '/images/airbnb2.png', '/images/airbnb3.png'],
    desc: 'a partly clone from airbnb website',
    info: ['search for a destination and choose the start and end date',
      'specify the guests amount ',
      'you can see the options and a map to choose from'
    ]
  },
  {
     url:'https://linkedin-clone-sand-eight.vercel.app/',
    id: 3,
    title: "linkedIn clone",
    image: ['/images/linkedin.png', '/images/linked2.png', '/images/linked3.png'],
    desc: 'a simple clone from some parts of linkedIn app',
    info: ['implements clerk technology for sign in to tha app and manage the user',
      'uses Azure cosmosDb for saving data and uploading images',
      'ability to post a statement with an image if signed in',
      'ability to like and unlike posts',
      'ability to add a comment on a post',
      'ability to delete a post if you are the author',
      
    ]
  }
]

async function page({ params }: { params: Promise<{ id: number }> }) {

  

  const { id } = await params;
  console.log('id in page', id)

  const project = projects.find((item) => item.id == id) as Props
  return (
    <div className='flex flex-col max-w-4xl mx-auto'>
      <div className='h-10 w-full bg-gray-200 '>
        <Link className='flex space-x-3 items-center' href='/'>
          <ChevronLeft size={30} color='blue' /> <p>Back Home</p>
        </Link>
      </div>
      <div className='h-46 w-full overflow-hidden'>
        <Slider imgs={project?.image}/>
        {/* <Carousel>
          <CarouselContent>
            {project?.image.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  src={img}
                  alt="project image"
                  width={700}
                  height={700}
                  className='w-full h-96  object-cover'
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

<div className='flex justify-end px-6 py-2'>
  <a target='_blank' href={project?.url}  className='text-blue-500 text-sm font-semibold hover:underline'>
   click here to View Project
  </a>
</div>

      </div>
      <div className='px-6 py-6 items-center flex flex-col'>
        <h1 className='font-bold text-gary-600 '>{project?.title}</h1>
        <div>
          <Link href={project?.url}></Link>
        </div>
        <div className='pt-8 text-gray-700 text-sm flex flex-col space-y-4 '>

            {
              project?.info.map((item,index)=>(
                <div key={index} className='flex space-x-2 items-start'>
                  <p className='text-gray-900 font-semibold'>{index+1}.</p>
                  <p className='text-gray-700 font-light text-sm'>{item}</p>
                </div>
              ))
            }
        </div>
      </div>



    </div>
  )
}

export default page