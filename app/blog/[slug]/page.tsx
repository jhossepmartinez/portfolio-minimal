import { readdirSync } from "fs";
import path from "path";

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
    <article>
      {metadata?.title && <h1 className="mb-0">{metadata.title}</h1>}
      {date && (
        <time
          className="text-gray-11 font-semibold text-base"
          dateTime={metadata.date}
        >
          {date}
        </time>
      )}
      <hr className="h-px bg-gray-6 border-0 mt-10 mb-10" />
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  const contentPath = path.join(process.cwd(), "content");
  const entries = readdirSync(contentPath);

  return entries.map((entry) => ({ slug: entry }));
}

export const dynamicParams = false;
