import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Experience } from "@/components/experience";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col px-4 pt-20 pb-20">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-sm font-medium text-gray-12 mb-0.5">
          Jhossep Martinez
        </h1>
        <p className="text-sm text-gray-11">Software Engineer</p>
      </header>

      {/* About */}
      <div className="mb-8">
        <p className="text-sm text-gray-11 mb-3">
          Building software with a focus on performance, reliability, and clean
          interfaces.
        </p>
        <p className="text-sm text-gray-11 mb-3">
          I share notes on{" "}
          <Link href="/blog" className="text-gray-12 underline">
            my blog
          </Link>
          , and open-source code on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-12 underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      {/* Experience */}
      <Experience />

      {/* Writing */}
      <section>
        <h2 className="text-sm font-medium text-gray-12 mb-4">Writing</h2>
        <ul className="flex flex-col gap-3">
          {posts.map((post) => {
            const date = new Date(
              post.date + "T00:00:00",
            ).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4"
                >
                  <span className="text-sm text-gray-12 underline decoration-gray-6 group-hover:decoration-gray-9 transition-colors">
                    {post.title}
                  </span>
                  <time
                    className="text-xs text-gray-9 shrink-0"
                    dateTime={post.date}
                  >
                    {date}
                  </time>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-4">
        <p className="text-xs text-gray-9">
          &copy; {new Date().getFullYear()} Jhossep Martinez
        </p>
      </footer>
    </main>
  );
}
