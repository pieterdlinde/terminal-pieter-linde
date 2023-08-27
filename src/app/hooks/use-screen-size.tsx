'use client'
import { useState, useEffect } from 'react';

const useScreenSize = (): { width: number; height: number } => {
  const [screenSize, setScreenSize] = useState({
    width: window?.innerWidth ?? 0,
    height: window?.innerHeight ?? 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window?.innerWidth ?? 0,
        height: window?.innerHeight ?? 0,
      });
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