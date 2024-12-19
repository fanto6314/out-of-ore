"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaRegClock } from "react-icons/fa6";

export default function NewsHero() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/getNews');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNewsItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const frontBlack = document.getElementById('front-black');
      if (frontBlack) { // Check if the element exists
        const scrollPosition = window.scrollY;
        const opacity = Math.min(1, scrollPosition / 400);
  
        frontBlack.style.backgroundColor = `rgba(21, 21, 21, ${0.6 + opacity * 0.4})`;
      }
    };
  
    // Call handleScroll immediately to set the initial opacity
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  

  const latestNews = newsItems[0];

  return (
    <section className="relative w-full h-[85vh]">
      {loading || error ? (
        {/* h-full div with if loading return tailwind spinner loader & if error display in red text the error */},
        <div className="h-full flex items-center justify-center">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="text-red-500 text-lg">
              {error ? `Error: ${error.message}` : "An unexpected error occurred."}
            </div>
          )}
        </div>
      ) : (
        <div className='relative w-full h-full'>
          <Image className="absolute top-0 left-0 w-full h-full -mt-9 object-cover" src={latestNews.thumbnail} alt={latestNews.title} fill sizes="100vw" style={{objectFit: 'cover'}} />

          <div className="relative w-full h-full">
            <div className="absolute h-full flex flex-col items-start justify-center z-20 mx-4 2xl:mx-80 xl:mx-32">
              <div className="text-start text-gray-100 text-base md:text-lg mb-3 bg-black/50 py-1 px-3 rounded-lg flex space-x-2 items-center">
                <FaRegClock className='text-base' />
                <span>
                  {new Date(latestNews.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>

              <div className="text-start text-[#f8ce5e]">
                <h1 className="bebas-neue text-[4rem] md:text-[6rem]">{latestNews.title}</h1>
              </div>
              <div className="text-start max-w-[650px]">
                <p className="text-gray-300 text-base md:text-lg line-clamp-3">
                  {latestNews.short}
                </p>
              </div>
              <div className="text-start mt-6 flex row space-x-3">
                <a href={latestNews.url} target="_blank" rel="noopener noreferrer" className="bg-[#f8ce5e] hover:bg-[#bd9e43] rounded-lg flex text-center items-center justify py-2 px-4">
                  <span className="text-lg md:text-xl text-gray-900 bebas-neue-font">
                    READ MORE
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div 
            className="absolute top-0 left-0 w-full h-full z-10" 
            id='front-black'
            style={{ backgroundColor: 'rgba(21, 21, 21, 0.6)' }}
          ></div>

          <div className="absolute bottom-0 w-full">
            <div className="relative text-center z-10 py-12 bg-[#0c0c0c]" id="shape">
              <div className="dark-bar-pattern-4"></div>
              <div className="dark-bar-pattern-4 bottom flip"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}