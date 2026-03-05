import { readdirSync } from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export async function getPosts(): Promise<PostMeta[]> {
  const contentDir = path.join(process.cwd(), "content");
  const slugs = readdirSync(contentDir);

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/${slug}/index.mdx`);
      return {
        slug,
        title: metadata.title,
        date: metadata.date,
        description: metadata.description,
      } satisfies PostMeta;
    }),
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
