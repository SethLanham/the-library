import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home | The Library",
  description: "A digital sanctuary for imagination, innovation, and ideas that shape tomorrow.",
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <nav className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-300">
        <h2 className="text-xl font-bold text-gold">The Library</h2>
        <ul className="flex gap-6 text-sm font-medium text-obsidian">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Scrolls</Link></li>
        </ul>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Welcome to <strong>The Library</strong> -- a home for innovation, imagination, and ideas that shape tomorrow.
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="text-center sm:text-left max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Welcome to <span className="text-gold">The Library</span>
          </h1>
          <p className="text-lg leading-relaxed">
            A digital sanctuary for imagination, innovation, and ideas that shape tomorrow. Discover scrolls, dive into thought, and forge the future.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
