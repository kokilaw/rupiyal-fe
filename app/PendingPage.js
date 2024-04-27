import Link from 'next/link'

export default function PendingPage({ params = {} }) {
    return (
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-32 lg:py-40"></div>
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Coming Soon.</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            This page is not implemented yet.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
          We currently working on to bring this page to you as soon as possible!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  