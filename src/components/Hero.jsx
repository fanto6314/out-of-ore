"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [blastAnimated, setBlastAnimated] = useState(false);
  const [buildAnimated, setBuildAnimated] = useState(false);

  useEffect(() => {
    const timeoutBuild = setTimeout(() => {
      setBuildAnimated(true);
  
      const timeoutBlast = setTimeout(() => {
        setBlastAnimated(true);
      }, 500);
      return () => clearTimeout(timeoutBlast);
    }, 600);
  
    return () => clearTimeout(timeoutBuild);
  }, []);


  const blastVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: {
      opacity: 0,
      scale: 2,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  

  return (
    <section className="relative w-full h-full">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full -mt-9 object-cover">
        <source src="https://video.cloudflare.steamstatic.com/store_trailers/256979353/movie480_vp9.webm" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      <div className="relative w-full h-full">
        <div className="absolute h-full flex flex-col items-start justify-center z-20 mx-4 2xl:mx-80 xl:mx-32">
          <div className="text-start text-[#f8ce5e]">
            <motion.h1
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="bebas-neue text-[8rem] md:text-[12rem]"
            >
              MINE
            </motion.h1>
            <AnimatePresence>
              {blastAnimated && (
                <motion.h1
                  key="blast"
                  variants={blastVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                  className="-mt-3 bebas-neue text-[8rem] md:text-[12rem]"
                >
                  BLAST
                </motion.h1>
              )}
          </AnimatePresence>
          <motion.h1
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 , transition: { delay: buildAnimated ? 0.2 : 0 } }}
            className="-mt-3 bebas-neue text-[8rem] md:text-[12rem]"
          >
            BUILD
          </motion.h1>
        </div>
          <div className="text-start max-w-[450px]">
            <h1 className="text-gray-300 text-base md:text-lg">
              Explore our game Out of Ore, engage with our community on Discord, and receive answers to any questions you may have. Meet the North Modding Company team and stay updated by following us on social media.
            </h1>
          </div>
          <div className="text-start mt-3 flex row space-x-4">
            <Link 
              href="https://store.steampowered.com/app/2009350/Out_of_Ore/" 
              className="bg-[#f8ce5e] hover:bg-[#bd9e43] rounded-lg flex text-center items-center justify py-2 px-4 transform hover:scale-110 transition-transform duration-200" 
            >
              <span className="text-lg md:text-xl text-gray-900 hover:text-[#121212] bebas-neue-font">
                PURCHASE
              </span>
            </Link>
            
            <Link
              href="https://discord.gg/QFMWACNKMQ"
              className="bg-[#2a2a2a] border-[#4a4a4a] border-2 hover:bg-[#4a4a4a] rounded-lg flex text-center items-center justify py-2 px-4 transform hover:scale-110 transition-transform duration-200"
            >
              <span className="text-lg md:text-xl text-white bebas-neue-font tracking-wide">
                JOIN OUR COMMUNITY
              </span>
            </Link>
            
            
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="relative text-center z-10 py-12 bg-[#2a2a2a]" id="shape">
            <div className="dark-bar-pattern"></div>
            <div className="dark-bar-pattern bottom flip"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
