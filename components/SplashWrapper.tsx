'use client'
import React, { useEffect, useState } from 'react'
import Splash from './Splash'

function SplashWrapper({children}: {children: React.ReactNode}) {
  let hasShown = localStorage.getItem('splashShown');

    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
      console.log("repest from wrapper")
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 6000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    if(hasShown && !showSplash){
      return <>{children}</>
  }else{
     localStorage.setItem('splashShown', 'true')
     return <Splash onFinish={() => setShowSplash(false)} /> 
  }
  // return (
  //   {if(hasShown && !showSplash)?(<>{children}</>):
  //   }
  //   }
  //   showSplash? <Splash onFinish={() => setShowSplash(false)} /> : <>{children}</>
  // )
}



export default SplashWrapper