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
        <time className="text-gray-11 text-sm" dateTime={metadata.date}>
          {date}
        </time>
      )}
      <hr className="h-px bg-gray-6 border-0 mt-10 mb-10" />
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
