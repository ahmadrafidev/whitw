import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950 relative">
      <header className="flex justify-between w-full p-4 absolute top-0 left-0 right-0">
        <Link href="/new" className="text-2xl font-bold text-gray-700">
          +
        </Link>
        <div className="flex space-x-4">
          <Link href="https://github.com/ahmadrafidev/whitw" passHref className="text-gray-700 hover:text-gray-900">
            GitHub
          </Link>
        </div>
      </header>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-zinc-950 dark:text-zinc-50">WHITW</h1>
        <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-2 tracking-tighter">
          Get Real-Time Insights on Global Events!
        </h2>
      </div>
      <div className="w-full max-w-md mt-8">
        <SearchBar />
      </div>
    </main>
  );
}
