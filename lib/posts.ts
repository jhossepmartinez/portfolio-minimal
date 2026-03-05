import { readdirSync, readFileSync } from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface Heading {
  text: string;
  id: string;
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

export function getHeadings(slug: string): Heading[] {
  const filePath = path.join(process.cwd(), "content", slug, "index.mdx");
  const source = readFileSync(filePath, "utf-8");

  const headingRegex = /^## (.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(source)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ text, id });
  }

  return headings;
}
