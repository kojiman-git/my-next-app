import React from 'react'; // これを追加
import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders welcome message', () => {
  render(<Home />);
  const linkElement = screen.getByText(/ようこそ、Next.jsの世界へ！/i);
  expect(linkElement).toBeInTheDocument();
});
