import { readdirSync } from "fs";
import path from "path";
import Link from "next/link";
import { getHeadings } from "@/lib/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/${slug}/index.mdx`
  );
  const headings = getHeadings(slug);

  const date = new Date(metadata?.date + "T00:00:00").toLocaleDateString(
    undefined,
    {
      weekday: undefined,
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <>
      <aside className="not-prose fixed top-40 right-[calc(50%+384px+2rem)] hidden xl:block mr-20">
        <nav>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-10 hover:text-gray-12 transition-colors mb-8"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-semibold">Home</span>
          </Link>

          {headings.length > 0 && (
            <ul className="space-y-2 list-none p-0 m-0">
              {headings.map((heading) => (
                <li key={heading.id} className="p-0 m-0">
                  <a
                    href={`#${heading.id}`}
                    className="text-base text-gray-11 hover:text-gray-12 transition-colors leading-snug"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </aside>

      <article>
        {metadata?.title && <h1 className="mb-0! mt-0!">{metadata.title}</h1>}
        {date && (
          <time
            className="text-gray-11 font-semibold text-base mt-0 pt-0"
            dateTime={metadata.date}
          >
            {date}
          </time>
        )}
        <hr className="h-px bg-gray-6 border-0 mt-10 mb-10" />
        <Post />
      </article>
    </>
  );
}

export function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "content");
  const entries = readdirSync(contentPath);

  return entries.map((entry) => ({ slug: entry }));
}

export const dynamicParams = false;
