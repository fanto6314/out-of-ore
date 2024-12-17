'use client';

import { useParams } from 'next/navigation';

export default function NewsPage() {
  const { newsId } = useParams(); // Get the dynamic route parameter

  return (
    <div>
      <h1>News Page</h1>
      <p>News ID: {newsId}</p>
    </div>
  );
}