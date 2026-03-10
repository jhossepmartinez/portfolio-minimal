import { readdirSync } from "fs";
import path from "path";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/${slug}/index.mdx`
  );

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
      {/* Left sidebar — back button */}
      <aside className="hidden xl:block xl:col-start-1 xl:row-start-1">
        <nav className="sticky top-40">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-10 hover:text-gray-12 transition-colors"
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
        </nav>
      </aside>

      {/* Center column — blog content */}
      <article
        className={`
          col-start-1 xl:col-start-2 w-full max-w-3xl
          prose max-w-none
          prose-base md:prose-lg
          prose-headings:font-semibold prose-headings:text-gray-12 prose-headings:text-base md:prose-headings:text-lg
          prose-p:text-gray-11 prose-p:font-semibold
          prose-strong:text-gray-12 prose-strong:font-semibold
          prose-ul:text-gray-11 prose-ul:font-semibold prose-ol:text-gray-11
          prose-hr:bg-gray-6 prose-hr:border-0 prose-hr:mt-10 prose-hr:h-px
          prose-blockquote:border-l-2 prose-blockquote:text-gray-1 prose-blockquote:border-gray-6
          prose-img:rounded-2xl
          prose-a:text-gray-12 marker:text-gray-9

          /* CODE BLOCKS (<pre> and <pre><code>) */
          prose-pre:bg-gray-2 prose-pre:text-gray-11
          [&_pre_code]:bg-transparent

          /* INLINE CODE (<code> without <pre>) */
          [&_:not(pre)>code]:bg-gray-3
          [&_:not(pre)>code]:text-gray-12
          [&_:not(pre)>code]:px-1.5
          [&_:not(pre)>code]:py-0.5
          [&_:not(pre)>code]:rounded-md
          [&_:not(pre)>code]:font-mono

          /* Remove default Tailwind backticks from inline code */
          prose-code:before:content-none
          prose-code:after:content-none
        `}
      >
        {metadata?.title && <h1 className="mb-0! mt-0!">{metadata.title}</h1>}
        {date && (
          <time
            className="block text-gray-11 font-semibold text-base"
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
