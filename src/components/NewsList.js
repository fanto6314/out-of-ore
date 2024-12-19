"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewsList() {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 9;
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

  useEffect(() => {
    if (window.location.hash === "#newsList") {
      const target = document.querySelector("#newsList");
      if (target) {
        const offset = 80; // Adjust this value as needed
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [currentPage]);

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);
  const paginatedNews = newsItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?newsPage=${page}#newsList`);
    }
  };

  return (
    <section className="flex flex-col text-white z-50 h-full py-12 lg:mx-80 -mt-6">
      {loading || error ? (
        <div className="h-full flex items-center justify-center w-full">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div key={index} className="flex flex-col animate-pulse">
                  <div className="h-[250px] w-full bg-[#212121] rounded-lg"></div>
                  <div className="flex flex-row items-center mt-2 space-x-2">
                    <div className="w-40 h-6 bg-[#212121] rounded-lg"></div>
                    <div className="w-20 h-6 bg-[#212121] rounded-lg"></div>
                  </div>
                  <div className="mt-3 h-8 bg-[#212121] rounded-lg"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-[#212121] rounded-lg w-3/4"></div>
                    <div className="h-4 bg-[#212121] rounded-lg w-full"></div>
                    <div className="h-4 bg-[#212121] rounded-lg w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-red-500 text-lg">
              {error ? `Error: ${error.message}` : "An unexpected error occurred."}
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* News list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="newsList">
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
                  <div className="text-start text-gray-300 text-base md:text-xl bg-[#212121]/50 py-1 px-3 rounded-lg">
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
              className={`px-4 py-2 rounded-lg bg-[#212121] hover:bg-gray-600 transition ${
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
                    : "bg-[#212121] hover:bg-gray-600"
                } transition`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg bg-[#212121] hover:bg-gray-600 transition ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
