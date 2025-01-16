import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Homeコンポーネント', () => {
  test('連絡先を追加できること', () => {
    render(<Home />);

    // 入力フィールドに名前と電話番号を入力
    fireEvent.change(screen.getByPlaceholderText('名前を入力'), { target: { value: '太郎' } });
    fireEvent.change(screen.getByPlaceholderText('電話番号を入力'), { target: { value: '123-456-7890' } });

    // 追加ボタンをクリック
    fireEvent.click(screen.getByText('追加'));

    // 追加された連絡先が表示されていることを確認
    expect(screen.getByText('太郎 - 123-456-7890')).toBeInTheDocument();
  });

  test('連絡先を削除できること', () => {
    render(<Home />);

    // 連絡先を追加
    fireEvent.change(screen.getByPlaceholderText('名前を入力'), { target: { value: '太郎' } });
    fireEvent.change(screen.getByPlaceholderText('電話番号を入力'), { target: { value: '123-456-7890' } });
    fireEvent.click(screen.getByText('追加'));

    // 削除ボタンをクリック
    fireEvent.click(screen.getByText('削除'));

    // 連絡先が削除されたことを確認
    expect(screen.queryByText('太郎 - 123-456-7890')).not.toBeInTheDocument();
  });
});
