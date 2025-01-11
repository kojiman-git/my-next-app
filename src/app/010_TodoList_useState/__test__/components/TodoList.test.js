import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../../components/TodoList';

describe('TodoListコンポーネント', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('初期状態でTODOリストは空であること', () => {
    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems).toHaveLength(0);
  });

  test('TODOを追加することができる', () => {
    const input = screen.getByPlaceholderText('新しいTODOを入力');
    const addButton = screen.getByText('追加');

    fireEvent.change(input, { target: { value: '新しいTODO' } });
    fireEvent.click(addButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(1);
    expect(todoItems[0]).toHaveTextContent('新しいTODO');
  });

  test('TODOを削除することができる', () => {
    const input = screen.getByPlaceholderText('新しいTODOを入力');
    const addButton = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'TODOを削除' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('削除');
    fireEvent.click(deleteButton);

    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems).toHaveLength(0);
  });

  test('TODOを編集することができる', () => {
    const input = screen.getByPlaceholderText('新しいTODOを入力');
    const addButton = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'TODOを編集' } });
    fireEvent.click(addButton);

    const editButton = screen.getByText('編集');
    fireEvent.click(editButton);

    const editInput = screen.getByPlaceholderText('TODOを編集');
    const updateButton = screen.getByText('更新');

    fireEvent.change(editInput, { target: { value: '編集したTODO' } });
    fireEvent.click(updateButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(1);
    expect(todoItems[0]).toHaveTextContent('編集したTODO');
  });

  test('編集キャンセルボタンが機能する', () => {
    const input = screen.getByPlaceholderText('新しいTODOを入力');
    const addButton = screen.getByText('追加');

    fireEvent.change(input, { target: { value: 'キャンセルするTODO' } });
    fireEvent.click(addButton);

    const editButton = screen.getByText('編集');
    fireEvent.click(editButton);

    const cancelButton = screen.getByText('キャンセル');
    fireEvent.click(cancelButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(1);
    expect(todoItems[0]).toHaveTextContent('キャンセルするTODO');
  });
});
