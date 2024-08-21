import Link from 'next/link';

import SearchBar from '@/components/ui/SearchBar';
import NewButton from '@/components/ui/NewButton';
import GitHubButton from '@/components/ui/GithubButton';

import { FaGlobe, FaBriefcase, FaHeartbeat, FaLaptop } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">

      <header className="flex justify-between w-full p-3 absolute top-0 left-0 right-0">
        <NewButton />
        <GitHubButton />
      </header>

      <section className="w-full max-w-2xl flex flex-col justify-center items-center -mt-48">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-zinc-950 dark:text-zinc-50">WHITW</h1>
          <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-2 tracking-tighter">
            Search for what‘s happening
          </h2>
        </div>
        <div className="w-full max-w-2xl mt-4">
          <SearchBar />
        </div>
      </section>
      
      {/* Cue Keywords Cards */}
      <section className="w-full max-w-2xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
          <FaGlobe className="text-blue-500 text-2xl mr-3" />
          <span className="text-gray-900 dark:text-gray-100">Global Politics</span>
        </div>
        <div className="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
          <FaBriefcase className="text-green-500 text-2xl mr-3" />
          <span className="text-gray-900 dark:text-gray-100">Business Insights</span>
        </div>
        <div className="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
          <FaHeartbeat className="text-red-500 text-2xl mr-3" />
          <span className="text-gray-900 dark:text-gray-301000">Health News</span>
        </div>
        <div className="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700">
          <FaLaptop className="text-yellow-500 text-2xl mr-3" />
          <span className="text-gray-900 dark:text-gray-100">Tech Trends</span>
        </div>
      </section>

    </main>
  );
}
