import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

import NewButton from '@/components/NewButton';
import GitHubButton from '@/components/GithubButton';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="flex justify-between w-full p-3 absolute top-0 left-0 right-0">
        <NewButton />
        <GitHubButton />
      </header>
      <section className="w-full max-w-2xl flex flex-col -mt-48">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-zinc-950 dark:text-zinc-50">WHITW</h1>
          <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-2 tracking-tighter">
            Get Real-Time Insights on Global Events!
          </h2>
        </div>
        <div className="w-full max-w-2xl mt-4">
          <SearchBar />
        </div>
      </section>
    </main>
  );
}
