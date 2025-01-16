import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Homeコンポーネント', () => {
  test('フォーム要素が正しく表示される', () => {
    render(<Home />);

    expect(screen.getByText('ユーザー登録フォーム')).toBeInTheDocument();
    expect(screen.getByLabelText('名前:')).toBeInTheDocument();
    expect(screen.getByLabelText('メールアドレス:')).toBeInTheDocument();
    expect(screen.getByLabelText('パスワード:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '登録' })).toBeInTheDocument();
  });

  test('フィールドが空の場合にバリデーションエラーが表示される', () => {
    render(<Home />);

    fireEvent.click(screen.getByRole('button', { name: '登録' }));

    expect(screen.getByText('名前は必須です。')).toBeInTheDocument();
    expect(screen.getByText('メールアドレスは必須です。')).toBeInTheDocument();
    expect(screen.getByText('パスワードは必須です。')).toBeInTheDocument();
  });

  test('パスワードが短い場合にエラーが表示される', () => {
    render(<Home />);

    fireEvent.change(screen.getByLabelText('名前:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('メールアドレス:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('パスワード:'), { target: { value: 'short' } });
    fireEvent.click(screen.getByRole('button', { name: '登録' }));

    expect(screen.getByText('パスワードは8文字以上である必要があります。')).toBeInTheDocument();
  });

  test('フォームを送信し、入力フィールドがクリアされることを確認する', () => {
    render(<Home />);

    fireEvent.change(screen.getByLabelText('名前:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('メールアドレス:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('パスワード:'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: '登録' }));

    expect(screen.queryByText('名前は必須です。')).not.toBeInTheDocument();
    expect(screen.queryByText('メールアドレスは必須です。')).not.toBeInTheDocument();
    expect(screen.queryByText('パスワードは必須です。')).not.toBeInTheDocument();

    expect(screen.getByLabelText('名前:').value).toBe('');
    expect(screen.getByLabelText('メールアドレス:').value).toBe('');
    expect(screen.getByLabelText('パスワード:').value).toBe('');
  });
});
