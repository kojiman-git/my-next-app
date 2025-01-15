import { render, screen } from '@testing-library/react';
import Home from '../page'; 

describe('Home コンポーネント', () => {
  
  test('ブログ投稿の見出しが表示される', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Blog Posts/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('投稿のリストが表示される', () => {
    render(<Home />);
    const firstPostLink = screen.getByText(/First Post/i);
    const secondPostLink = screen.getByText(/Second Post/i);
    
    expect(firstPostLink).toBeInTheDocument();
    expect(secondPostLink).toBeInTheDocument();
  });

  test('新しい投稿を作成するリンクが表示される', () => {
    render(<Home />);
    const createPostLink = screen.getByText(/Create New Post/i);
    expect(createPostLink).toBeInTheDocument();
  });

  test('投稿リンクの href 属性が正しい', () => {
    render(<Home />);
    const firstPostLink = screen.getByText(/First Post/i);
    const secondPostLink = screen.getByText(/Second Post/i);

    expect(firstPostLink.closest('a')).toHaveAttribute('href', '/050_my-blog_AppRouter/posts/1');
    expect(secondPostLink.closest('a')).toHaveAttribute('href', '/050_my-blog_AppRouter/posts/2');
  });

  test('新しい投稿を作成するリンクの href 属性が正しい', () => {
    render(<Home />);
    const createPostLink = screen.getByText(/Create New Post/i);
    expect(createPostLink.closest('a')).toHaveAttribute('href', '/050_my-blog_AppRouter/create');
  });

});