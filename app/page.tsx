import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-3xl mt-40 mb-80 text-lg">
      <header className="mb-16">
        <h1 className="text-lg font-semibold text-gray-12 tracking-tight">
          Jhossep Martinez
        </h1>
        <p className="text-gray-11 font-semibold text-base">
          Software Engineer
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map((post) => {
          const date = new Date(post.date + "T00:00:00").toLocaleDateString(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          );

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-gray-4 bg-gray-2 p-6 transition-colors hover:border-gray-6 hover:bg-gray-3"
            >
              <time
                className="text-sm text-gray-9 font-semibold"
                dateTime={post.date}
              >
                {date}
              </time>
              <h2 className="mt-2 font-semibold text-gray-12 group-hover:text-white">
                {post.title}
              </h2>
              <p className="mt-2 text-base font-semibold leading-relaxed text-gray-11 line-clamp-3">
                {post.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
