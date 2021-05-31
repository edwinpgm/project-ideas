import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getPosts } from '@lib/data';
import { IPost } from '@types';
import { PostItem } from '@components/PostItem';

type Props = {
  posts: IPost[];
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Project Ideas for devs</title>
      </Head>

      <header className="py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Project ideas for devs
        </h1>
        <p className="text-lg text-gray-500 font-light mt-2">
          Need inspiration for you new project? Do you want create a portfolio
          that matter?
        </p>
      </header>

      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return { props: { posts: posts } };
};

export default Home;
