'use client';

import { useSearchParams } from 'next/navigation';
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
    return <div className="p-4">Loading...</div>;
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
      <ul>
        {data.articles.map((article: any, index: number) => (
          <li key={index} className="mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
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
