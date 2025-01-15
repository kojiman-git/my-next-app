import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';

describe('Home Component', () => {
    test('初期状態でタスクがないことを表示する', () => {
        render(<Home />);
        expect(screen.getByText('タスクがありません。')).toBeInTheDocument();
    });

    test('タスクを追加できること', () => {
        render(<Home />);
        
        const input = screen.getByPlaceholderText('新しいタスクを追加');
        const addButton = screen.getByRole('button', { name: /追加/i });
        
        fireEvent.change(input, { target: { value: '新しいタスク' } });
        fireEvent.click(addButton);
        
        expect(screen.getByText('新しいタスク')).toBeInTheDocument();
        expect(screen.queryByText('タスクがありません。')).not.toBeInTheDocument();
    });

    test('タスクをトグルできること', () => {
        render(<Home />);
        
        const input = screen.getByPlaceholderText('新しいタスクを追加');
        const addButton = screen.getByRole('button', { name: /追加/i });
        
        fireEvent.change(input, { target: { value: '新しいタスク' } });
        fireEvent.click(addButton);
        
        const task = screen.getByText('新しいタスク');
        fireEvent.click(task);
        
        expect(task).toHaveStyle('text-decoration: line-through');
    });

    test('タスクを削除できること', () => {
        render(<Home />);
        
        const input = screen.getByPlaceholderText('新しいタスクを追加');
        const addButton = screen.getByRole('button', { name: /追加/i });
        
        fireEvent.change(input, { target: { value: '削除するタスク' } });
        fireEvent.click(addButton);
        
        const deleteButton = screen.getByRole('button', { name: /削除/i });
        fireEvent.click(deleteButton);
        
        expect(screen.queryByText('削除するタスク')).not.toBeInTheDocument();
        expect(screen.getByText('タスクがありません。')).toBeInTheDocument();
    });
});
