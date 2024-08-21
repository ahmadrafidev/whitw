'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa'; 

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  const router = useRouter();

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      router.push(`/results?query=${query}`);
    }
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 px-4 w-full">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What's happening in the world?"
          className="bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-700"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 px-4 py-2 flex items-center justify-center text-white dark:text-black"
        >
          <FaArrowRight className="text-zinc-800 dark:text-zinc-100" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
