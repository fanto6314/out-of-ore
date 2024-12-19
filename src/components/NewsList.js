"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewsList() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9; // 3 rows x 3 columns
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("newsPage") || "1", 10);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/getNews?count=50&maxLength=150");
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

  if (loading) {
    return <div>Loading news...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const paginatedNews = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?newsPage=${page}`);
    }
  };

  // {
  //   "gid": "6350729003495608131",
  //   "title": "Hotfix for Conversion message",
  //   "url": "https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/6350729003495608131",
  //   "is_external_url": true,
  //   "author": "northmoddingcompany",
  //   "contents": "Hotfix to fix so the conversion message appears when loading all savegames made before 0.25 Best regards Christian",
  //   "feedlabel": "Community Announcements",
  //   "date": 1727994488,
  //   "feedname": "steam_community_announcements",
  //   "feed_type": 1,
  //   "appid": 2009350,
  //   "tags": [
  //      "patchnotes"
  //   ]
  // },

  return (
    <section className="flex flex-col text-white z-50 h-full py-12 lg:mx-80 -mt-6">
      {/* News list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedNews.map((item) => (
          <div className="flex flex-col">
            <Link href={`/news/${item.id}`} key={item.id} rel="noopener noreferrer">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-[250px] w-full object-cover rounded-lg"
              />
            </Link>
            <div className="flex flex-row items-center mt-2 space-x-2 bebas-neue-font">
              <div className="text-start text-gray-300 text-base md:text-xl bg-gray-800/50 py-1 px-3 rounded-lg">
                <span>
                  {new Date(item.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className={`text-start text-base md:text-xl py-1 px-3 rounded-lg text-[#121212]/80 ${item.tags && item.tags.includes("patchnotes") ? 'bg-[#e55034] hover:bg-[#b83b22]' : 'bg-[#f8ce5e] hover:bg-[#bd9e43]'}`}> {/* Adjusted padding */}
                {item.tags && item.tags.includes("patchnotes") ? "PATCH" : "NEWS"}
              </div>
            </div>
            <div className="mt-3 text-start text-white uppercase bebas-neue-font tracking-wide text-base md:text-3xl">
              <Link href={`/news/${item.id}`} key={item.id} rel="noopener noreferrer">
                {item.title}
              </Link>
            </div>
            <div className="mt-4">
              {item.short}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#f8ce5e] text-[#121212]"
                : "bg-gray-700 hover:bg-gray-600"
            } transition`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
