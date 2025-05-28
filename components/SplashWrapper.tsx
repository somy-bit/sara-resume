'use client'
import React, { useEffect, useState } from 'react'
import Splash from './Splash'

function SplashWrapper({children}: {children: React.ReactNode}) {

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
      console.log("repest from wrapper")
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 6000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

  return (
    showSplash? <Splash onFinish={() => setShowSplash(false)} /> : <>{children}</>
  )
}

export default SplashWrapper