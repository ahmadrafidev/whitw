'use client';

import Link from 'next/link';

const NewButton = () => {
  return (
    <Link
      href="/new"
      className="bg-zinc-950 dark:bg-zinc-100 rounded-full shadow-sm transition-all duration-300 ease-in-out overflow-hidden"
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <span className="text-zinc-100 dark:text-zinc-800 text-3xl font-normal transition-transform duration-300 ease-in-out hover:rotate-180">
          +
        </span>
      </div>
    </Link>
  );
};

export default NewButton;
