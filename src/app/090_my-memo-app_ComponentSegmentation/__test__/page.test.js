import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Home Component', () => {
  test('メモを追加できる', () => {
    render(<Home />);

    const input = screen.getByPlaceholderText('新しいメモを追加');
    const button = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'テストメモ' } });
    fireEvent.click(button);

    expect(screen.getByText('テストメモ')).toBeInTheDocument();
  });

  test('メモを編集できる', () => {
    render(<Home />);

    const input = screen.getByPlaceholderText('新しいメモを追加');
    const button = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'テストメモ' } });
    fireEvent.click(button);

    const editButton = screen.getByText('編集');
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue('テストメモ');
    fireEvent.change(editInput, { target: { value: '修正されたメモ' } });
    const saveButton = screen.getByText('保存');
    fireEvent.click(saveButton);

    expect(screen.getByText('修正されたメモ')).toBeInTheDocument();
  });

  test('メモを削除できる', () => {
    render(<Home />);

    const input = screen.getByPlaceholderText('新しいメモを追加');
    const button = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'テストメモ' } });
    fireEvent.click(button);

    const deleteButton = screen.getByText('削除');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('テストメモ')).not.toBeInTheDocument();
  });

  test('メモを検索できる', () => {
    render(<Home />);

    const input = screen.getByPlaceholderText('新しいメモを追加');
    const button = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'テストメモ1' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'テストメモ2' } });
    fireEvent.click(button);

    const searchInput = screen.getByPlaceholderText('メモを検索');
    fireEvent.change(searchInput, { target: { value: '1' } });

    expect(screen.getByText('テストメモ1')).toBeInTheDocument();
    expect(screen.queryByText('テストメモ2')).not.toBeInTheDocument();
  });
});