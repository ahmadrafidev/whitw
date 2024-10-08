'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';

const ResultsPageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setError('No query provided');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/news?query=${encodeURIComponent(query)}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setData(data);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return (
      <div className="p-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-black dark:text-white">Wait a Moment.</h1>
        <p className="text-xl font-medium text-black dark:text-white">We‘re curating the best news in the world. <strong>Just for you.</strong></p>
      </div>)
    ;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!data || !data.articles || data.articles.length === 0) {
    return <div className="p-4">No results found for {`"${query}"`}.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Results for {`"${query}"`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.articles.map((article: any, index: number) => (
          <div key={index} className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <Link href={article.url} target="_blank" rel="noopener noreferrer" className="block">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{article.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-300">{article.description}</p>
              <span className="text-blue-500 dark:text-blue-400 mt-4 block">Read more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResultsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 relative">
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <ResultsPageContent />
      </Suspense>
    </main>
  );
};

export default ResultsPage;
