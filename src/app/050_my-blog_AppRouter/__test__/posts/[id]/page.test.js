import { render, screen } from '@testing-library/react';
import Post from '../../../posts/[id]/page';
import { notFound } from 'next/navigation';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('Post コンポーネント', () => {
  
  test('存在する投稿が正しく表示される', () => {
    const params = { id: '1' }; // 存在する投稿のID
    render(<Post params={params} />);
    
    const headingElement = screen.getByText(/Post ID: 1/i);
    const contentElement = screen.getByText(/This is the first post./i);

    expect(headingElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test('存在しない投稿の場合、notFoundが呼ばれる', () => {
    const params = { id: '3' }; // 存在しない投稿のID
    render(<Post params={params} />);

    expect(notFound).toHaveBeenCalled(); // notFoundが呼ばれたことを確認
  });

});

