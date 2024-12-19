// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";

// export default function NewsPage() {
//   const [newsItems, setNewsItems] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { newsId } = useParams(); // Get the dynamic route parameter

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch("/api/getNews?count=1000&maxLength=5000");
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setNewsItems(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   const currentNews = newsItems.find((item) => item.id === newsId);

//   if (loading) {
//     return <div>Loading news...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!currentNews) {
//     return <div>News item not found</div>;
//   }

//   // Helper function to process the "contents" field
//   const processContent = (content) => {
//     // Replace {STEAM_CLAN_IMAGE} placeholders with the actual image URL
//     content = content.replace(/{STEAM_CLAN_IMAGE}\/\S+/g, (match) => {
//       const imagePath = match.replace("{STEAM_CLAN_IMAGE}", "https://clan.cloudflare.steamstatic.com/images");
//       return `<img src="${imagePath}" alt="News Image" class="my-4 rounded-lg" />`;
//     });

//     // Replace special Steam tags (e.g., ːsteamhappyː) with emojis or placeholders
//     content = content.replace(/ː\w+ː/g, "😊"); // Replace Steam tags with a smiley emoji

//     // Break content into paragraphs for better formatting
//     content = content
//       .split("\n")
//       .map((line) => `<p class="mb-4">${line}</p>`)
//       .join("");

//     return content;
//   };

//   return (
//     <section className="min-h-[50vh] bg-[#0c0c0c] text-gray-300">
//       <div className="flex flex-col pt-36 lg:mx-[21.5rem]">
//         {/* News Title */}
//         <h1 className="bebas-neue-font text-6xl text-[#f8ce5e]">{currentNews.title}</h1>

//         {/* Author Info */}
//         <p className="text-gray-300 mt-4">
//           by
//           <Link
//             className="text-white underline ml-1"
//             href={"https://discord.com/invite/QFMWACNKMQ"}
//             target={"_blank"}
//           >
//             {currentNews.author}
//           </Link>
//         </p>

//         {/* News Content */}
//         <div
//           className="mt-8 prose prose-invert text-gray-300"
//           dangerouslySetInnerHTML={{ __html: processContent(currentNews.short) }}
//         ></div>
//       </div>
//     </section>
//   );
// }