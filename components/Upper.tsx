import React from 'react'
import { motion } from 'framer-motion'

function Upper() {
  return (
    <div className='relative flex p-5 justify-center space-y-3  flex-col items-center bg-yellow h-full w-full flex-1'>
       
       <div className='absolute inset-0 bg-[url("/images/it.jpg")] bg-cover opacity-30'></div>
        <motion.h1
        initial={{opacity:0,y:'-300%'}}
        animate={{opacity:1,y:'-100%'}}
        transition={{duration:1,delay:1}}
        
        className='text-3xl relative z-10 font-semibold text-center  text-gray-600'
        >
            somayyeh mousavi
        </motion.h1>
        
        <motion.h2
        initial={{opacity:0,y:'300%'}}
        animate={{opacity:1,y:'-100%'}}
        transition={{duration:2,delay:1}}
        
        className='text-xl font-light text-center text-gray-500'
        >
            FullStack Web Developer

        </motion.h2>
    </div>
  )
}

export default Upper