import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPosts } from '@lib/data';
import { IPost } from '@types';
import { PostItem } from '@components/PostItem';
import { Layout } from '@components/Layout';

type Props = {
  posts: IPost[];
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Project Ideas for devs</title>
      </Head>

      <header className="py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Project ideas for devs
        </h1>
        <p className="text-lg text-gray-500 font-light mt-2">
          Need inspiration for you new project? Do you want to show interesting
          projects in your portfolio? Show these ideas!
        </p>
      </header>

      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return { props: { posts: posts } };
};

export default Home;
