import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

const POSTS = [
  {
    slug: 'title-1',
    meta: {
      title: 'Title 1',
      summary: 'Summary 1',
    },
  },
];

test('renders text hello world', () => {
  render(<Home posts={POSTS} />);
  const postTitle = screen.getByText(/Title 1/);

  expect(postTitle).toBeInTheDocument();
});
