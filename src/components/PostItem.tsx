import { IPost, Level } from '@types';
import React from 'react';

type Props = IPost;

export const PostItem: React.FC<Props> = ({ slug, meta }) => {
  return (
    <article
      key={slug}
      className="shadow-md rounded-md py-5 px-6 bg-white mb-4"
    >
      <span
        className={`flex items-center ${
          meta.level === Level.BASIC
            ? 'text-green-500'
            : meta.level === Level.INTERMEDIATE
            ? 'text-yellow-500'
            : 'text-purple-500'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        <span className="pl-1 text-xs uppercase font-bold">{meta.level}</span>
      </span>
      <a href={`/${slug}`}>
        <h2 className="mt-1 text-lg font-semibold text-gray-700">
          {meta.title}
        </h2>
      </a>
      <p className="text-gray-500 font-light mb-3">{meta.summary}</p>
      <a href={`/${slug}`} className="text-blue-500 inline-flex items-center">
        Learn more
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </article>
  );
};
