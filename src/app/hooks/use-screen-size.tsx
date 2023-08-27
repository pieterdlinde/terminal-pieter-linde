'use client'
import { useState, useEffect } from 'react';

const useScreenSize = (): { width: number; height: number } => {
  let windowElement: any = {
    innerWidth: 0,
    innerHeight:0
  };
  if (typeof window !== "undefined") {
    windowElement = window;
  } 
  const [screenSize, setScreenSize] = useState(
    {
      width: windowElement.innerWidth,
      height: windowElement.innerHeight ,
    }
  );

  useEffect(() => {
    const handleResize = () => {
      if (window !== undefined) {
        setScreenSize({
          width: window !== undefined ? window.innerWidth : 0,
          height: window !== undefined ? window.innerHeight : 0,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;