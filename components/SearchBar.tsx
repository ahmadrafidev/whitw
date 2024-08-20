'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/results?query=${query}`);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What's happening in the world?"
        className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-700"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black px-4 py-2 rounded-lg border border-zinc-600 dark:border-zinc-300 flex-shrink-0 hover:outline-none hover:ring-2 hover:ring-zinc-800 dark:hover:ring-zinc-200"
      >
        Find Out!
      </button>
    </div>
  );
};

export default SearchBar;
