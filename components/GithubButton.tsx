'use client';

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const GitHubButton = () => {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://github.com/ahmadrafidev/whitw"
        passHref
        className="flex items-center space-x-2 bg-zinc-950 dark:bg-zinc-100 text-gray-50 dark:text-gray-900 hover:text-gray-100 dark:hover:text-black transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg shadow"
      >
        <FaGithub className="text-xl" />
        <span>GitHub</span>
      </Link>
    </div>
  );
};

export default GitHubButton;
