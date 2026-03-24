import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Experience } from "@/components/experience";

export default async function Home() {
  const posts = await getPosts();
  const firstPost = posts[0]?.slug;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 pt-12 pb-20">
      <header className="mb-14">
        <div className="mb-5 flex items-center">
          <div className="flex size-13 items-center justify-center rounded-full bg-gray-2 text-sm font-medium text-gray-11 select-none">
            JM
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-semibold tracking-tight text-gray-12">
              Jhossep Martinez
            </h1>
            <p className="text-sm text-gray-10">Software Engineer</p>
          </div>
        </div>

        <p className="mb-6 max-w-xl text-sm leading-6 text-gray-11">
          I build software focused on performance, reliability, and clear
          interfaces. I enjoy creating products that are practical for users and
          maintainable for teams.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/cv/Jhossep_Martinez_Resume.pdf"
            download="Jhossep_Martinez_Resume.pdf"
            className="inline-flex items-center rounded-md bg-gray-3 px-3 py-2 text-sm font-medium text-gray-12 transition-colors hover:bg-gray-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-8 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1"
          >
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/jhossep-martinez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-1 py-2 text-sm text-gray-11 underline decoration-gray-7 underline-offset-4 transition-colors hover:text-gray-12 hover:decoration-gray-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-8 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jhossepmartinez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-1 py-2 text-sm text-gray-11 underline decoration-gray-7 underline-offset-4 transition-colors hover:text-gray-12 hover:decoration-gray-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-8 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-1"
          >
            GitHub
          </a>
          {firstPost ? (
            <Link
              href={`/blog/${firstPost}`}
              className="inline-flex items-center rounded-md border border-transparent px-2 py-2 text-sm text-gray-10 underline decoration-gray-7 underline-offset-4 transition-colors hover:text-gray-12 hover:decoration-gray-9"
            >
              Read latest note
            </Link>
          ) : null}
        </div>
      </header>

      <section className="mb-14">
        <h2 className="mb-5 text-base font-medium text-gray-12">Experience</h2>
        <Experience />
      </section>

      {/* Writing */}
      <section>
        <h2 className="mb-5 text-base font-medium text-gray-12">Writing</h2>
        <ul className="space-y-1">
          {posts.map((post) => {
            const date = new Date(post.date + "T00:00:00").toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            );

            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-md px-2 py-1.5 transition-colors hover:bg-gray-2"
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
    </main>
  );
}
