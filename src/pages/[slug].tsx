import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { getPost, getFiles } from '@lib/data';
import { IPost } from '@types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.slug as string);

  return { props: { ...post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles();

  return {
    paths: files.map((fileName) => ({
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    })),
    fallback: false,
  };
};

const Post: React.FC<IPost> = ({ meta, source }) => {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <MDXRemote {...source} />
    </div>
  );
};

export default Post;
