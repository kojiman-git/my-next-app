import { render, screen, fireEvent } from '@testing-library/react';
import CreatePost from '../../create/page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('CreatePost コンポーネント', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  test('タイトルを入力し、投稿を作成する', () => {
    render(<CreatePost />);
    
    // 入力フィールドにタイトルを入力
    const inputElement = screen.getByPlaceholderText(/Post Title/i);
    fireEvent.change(inputElement, { target: { value: 'My First Post' } });
    
    // フォームをサブミット
    const buttonElement = screen.getByText(/Create Post/i);
    fireEvent.click(buttonElement);
    
    // コンソールに新しい投稿が作成されたことが出力されるか確認
    expect(mockPush).toHaveBeenCalledWith('/050_my-blog_AppRouter'); // リダイレクト先を確認
    expect(inputElement.value).toBe('My First Post'); // 入力が正しく反映されているか確認
  });

  test('フォームが送信されたときにタイトルが空でないことを確認', () => {
    render(<CreatePost />);

    // フォームをサブミット
    const buttonElement = screen.getByText(/Create Post/i);
    fireEvent.click(buttonElement);

    // 必須フィールドエラーが表示されることを確認
    const inputElement = screen.getByPlaceholderText(/Post Title/i);
    expect(inputElement).toBeRequired();
  });
});