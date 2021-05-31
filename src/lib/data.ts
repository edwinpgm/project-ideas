import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { IPost, IMeta } from '@types';

const postsDirectory = join(process.cwd(), 'data');

export const getFiles = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPost = async (slug: string): Promise<IPost> => {
  const postPath = join(postsDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content);

  return {
    slug,
    meta: data as IMeta,
    source: mdxSource,
  };
};

export const getPosts = async (): Promise<IPost[]> => {
  const files = fs.readdirSync(postsDirectory);
  const posts = [];

  for (const fileName of files) {
    const postPath = join(postsDirectory, fileName);
    const postContent = fs.readFileSync(postPath, 'utf-8');
    const { data } = matter(postContent);

    posts.push({
      meta: data,
      slug: fileName.replace(/\.mdx$/, ''),
    });
  }

  return posts;
};
