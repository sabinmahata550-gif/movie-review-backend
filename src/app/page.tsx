





export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-24 md:px-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-400">
          MovieMind
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Discover movies you&apos;ll actually love.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Explore movies based on your interests, mood, ratings, and
          preferences.
        </p>
      </section>

      <section className="px-6 py-8 md:px-12">
        <h2 className="text-2xl font-semibold">
          Trending Movies
        </h2>
      </section>

      <section className="px-6 py-8 md:px-12">
        <h2 className="text-2xl font-semibold">
          Popular Movies
        </h2>
      </section>

      <section className="px-6 py-8 md:px-12">
        <h2 className="text-2xl font-semibold">
          Top Rated Movies
        </h2>
      </section>
    </main>
  );
}

