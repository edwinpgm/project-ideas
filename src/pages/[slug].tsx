import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { getPost, getFiles } from '@lib/data';
import { IPost } from '@types';
import { Layout } from '@components/Layout';

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
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="post">
        <MDXRemote {...source} />
      </div>
    </Layout>
  );
};

export default Post;
