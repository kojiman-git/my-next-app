import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../page';

describe('Counter Component', () => {
    test('初期値が0で表示されること', () => {
        render(<Counter />);
        expect(screen.getByRole('heading')).toHaveTextContent('カウント: 0');
    });

    test('増加ボタンをクリックするとカウントが1増えること', () => {
        render(<Counter />);
        
        const incrementButton = screen.getByRole('button', { name: /増加/i });
        fireEvent.click(incrementButton);
        
        expect(screen.getByRole('heading')).toHaveTextContent('カウント: 1');
    });

    test('減少ボタンをクリックするとカウントが1減ること', () => {
        render(<Counter />);
        
        const incrementButton = screen.getByRole('button', { name: /増加/i });
        fireEvent.click(incrementButton); // 1に増やす
        
        const decrementButton = screen.getByRole('button', { name: /減少/i });
        fireEvent.click(decrementButton);
        
        expect(screen.getByRole('heading')).toHaveTextContent('カウント: 0');
    });

    test('リセットボタンをクリックするとカウントが0に戻ること', () => {
        render(<Counter />);
        
        const incrementButton = screen.getByRole('button', { name: /増加/i });
        fireEvent.click(incrementButton); // 1に増やす
        
        const resetButton = screen.getByRole('button', { name: /リセット/i });
        fireEvent.click(resetButton);
        
        expect(screen.getByRole('heading')).toHaveTextContent('カウント: 0');
    });
});
