'use client'

import React, { useEffect, useState } from 'react'
import styles from './splash.module.css'
import {motion,AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import { on } from 'events'
import Lower from './Lower'
import Upper from './Upper'


function splash({onFinish}: {onFinish: () => void}) {

      const [showMain, setShowMain] = useState(false)
    const [hidePanel, setHidePanel] = useState(false)

    useEffect(() => {
      console.log("repeat splash")
        const timer = setTimeout(() => {
            onFinish();
        }, 6000); 

        const timer1 = setTimeout(() => {
            setShowMain(true);
        }, 5000); // 1 second

        const timer2 = setTimeout(() => {
            setHidePanel(true);
        }, 4000); // 3 seconds

        // const timer = setTimeout(() => {
        //     onFinish();
        // }, 3000); 
        // 3 seconds
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer)
        };

    }, [onFinish]);
    return (
        <div className='relative w-full h-screen overflow-hidden bg-black'>
            <AnimatePresence>
                {!hidePanel && (
                    <motion.div

                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='absolute top-0 left-0 w-full h-1/3  bg-gray-300 shadow-2xl z-10 '
                    >
                        <Upper />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!hidePanel && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className='absolute bottom-0 left-0 w-full h-2/3 bg-white z-10 '
                    >
                        <Lower />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, x: "-50%", y: "-30%", scale: 1, position: "absolute" }}
                animate={{
                    opacity: showMain ? 0 : 1,
                    x: hidePanel ? "0%" : "-50%",
                    y: hidePanel ? "0%" : "-30%",
                    scale: hidePanel ? 0.5 : 1,
                    top: hidePanel ? 0 : "30%",

                    left: hidePanel ? 0 : "50%",
                }}
                transition={{ duration: 1 }}
                className={`absolute shadow-lg rounded-full z-20 ${hidePanel ? "top-0 left-0" : "top-1/3 left-1/2"}`}

            >
                <Image
                    src='/images/avatar.jpeg'
                    alt="Avatar"
                    width={90}
                    height={90}
                    className='rounded-full object-cover h-36 w-36 border-2 border-white'
                />
            </motion.div>

</div>
    )
 
}

export default splash