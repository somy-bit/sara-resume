'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from 'react'
import Image from 'next/image'

function Slider({imgs}:{imgs:string[]}) {

     const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  ) 


  return (
        <Carousel
      plugins={[plugin.current]}
      className="w-full"
    //   onMouseEnter={plugin.current.reset}
    //   onMouseLeave={plugin.current.stop}
    >
      <CarouselContent>
        {imgs.map((img, index) => (
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
    </Carousel>
  )
}

export default Slider