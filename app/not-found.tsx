import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-background text-foreground dark:bg-background dark:text-foreground">
      <Image
        src="/404.svg"
        alt="404 Not Found"
        width={320}
        height={320}
        className="w-64 h-auto mb-6"
        priority
      />
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-1 text-center max-w-md">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 mb-6 text-center max-w-md">
        If you typed the web address, check it for spelling errors. Or, click
        the button below to return to the homepage.
      </p>
      <Link href="/">
        <button className="mt-2 px-6 py-2 text-lg bg-neutral-800 text-white rounded hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900 transition-colors shadow-md">
          Go Home
        </button>
      </Link>
    </div>
  );
}
