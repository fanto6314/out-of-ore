"use client"

import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '../utils/useWidth';
import Link from 'next/link';
import { FaNewspaper } from "react-icons/fa";

export default function News() {
  const [news, setNews] = useState([]);
  const [lastNews, setLastNews] = useState(null);

  const width = useWindowWidth();

  useEffect(() => {
    fetch('/api/getNews')
      .then(res => res.json())
      .then(data => {
        const sortedNews = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNews(data);
        setLastNews(sortedNews[0]);
      })
      .catch(err => console.error(err));
  }, []);

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day); // Use proper Date constructor with month as 0-indexed
  };

  const calculateDaysAgo = (dateString) => {
    const today = new Date();
    const parsedDate = parseDate(dateString);
  
    if (
      parsedDate.getDate() === today.getDate() &&
      parsedDate.getMonth() === today.getMonth() &&
      parsedDate.getFullYear() === today.getFullYear()
    ) {
      return "Today";
    }
  
    // Otherwise, calculate the number of days ago
    const diffTime = today - parsedDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} Days ago`;
  };
  

  return (
    <section className="news bg-[#131313] w-full">
      <div className="w-full pt-8 flex justify-center">
        {lastNews ? (
          <div key={lastNews.id} className="max-w-6xl mx-auto relative mt-8 mb-44 flex justify-center">
            <div className="flex flex-col items-center justify-end overflow-hidden rounded-lg mt-5 mb-24 sm:mb-8 w-full">
              <Link href={`/news/${lastNews.id}`}>
                <img src={lastNews.thumbnail} className="w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-100 scale-110" alt={lastNews.title} />
              </Link>
              <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#f8ce5e] px-4 py-2 rounded-lg text-gray-900 font-semibold text-sm">
                <div className='inline-flex space-x-2 items-center'>
                  <FaNewspaper size={20} />
                  <div>LAST NEWS</div>
                </div>
              </div>
              <div className="absolute bg-[#1a1a1a] text-white px-8 py-4 rounded-lg w-[90%] shadow-2xl shadow-black/30 mx-auto translate-y-36 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className='inline-flex space-x-2 items-start mb-2 text-gray-900'>
                    <div className="bg-[#f8ce5e] px-3 py-1 rounded-full text-[12px]  sm:text-[14px] font-semibold ">
                      {lastNews.type.charAt(0).toUpperCase() + lastNews.type.slice(1)}
                    </div>
                    <div className="bg-[#f8ce5e] px-3 py-1 rounded-full text-[12px] sm:text-[14px] font-semibold">
                      {calculateDaysAgo(lastNews.date)}
                    </div>
                  </div>
                  <h1 className="text-[20px] sm:text-[50px] bebas-neue-font">{lastNews.title}</h1>
                  <div className="flex items-center justify-center my-4 w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#f8ce5e] to-transparent"></div>
                  </div>
                  <p className="text-[13px] sm:text-[15px] text-gray-300 mt-3">{lastNews.short}</p>
                  <Link href={`/news/${lastNews.id}`} className="bg-[#f8ce5e] hover:bg-[#bd9e43] rounded-lg flex text-center items-center mt-4 mb-3 justify py-1 px-6">
                    <span className="text-md md:text-lg text-gray-900 bebas-neue-font mt-1">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-white">Loading news...</p>
        )}
      </div>
    </section>
  );
}
