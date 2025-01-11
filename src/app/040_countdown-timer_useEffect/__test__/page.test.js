import { render, screen, fireEvent, act } from '@testing-library/react';
import CountdownTimer from '../page'

jest.useFakeTimers();

describe('CountdownTimer', () => {
    test('初期状態の確認', () => {
        render(<CountdownTimer />);
        expect(screen.getByText(/カウントダウン:/)).toHaveTextContent('カウントダウン: 10');
        expect(screen.getByRole('button', { name: /タイマー開始/i })).toBeEnabled();
    });

    test('タイマー開始ボタンを押すとカウントダウンが始まる', () => {
        render(<CountdownTimer />);
        
        const button = screen.getByRole('button', { name: /タイマー開始/i });
        
        act(() => {
            fireEvent.click(button); // ボタンクリックをシミュレート
        });
        
        expect(button).toBeDisabled();
        expect(screen.getByText(/カウントダウン:/)).toHaveTextContent('カウントダウン: 10');

        // 1秒進める
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText(/カウントダウン:/)).toHaveTextContent('カウントダウン: 9');

        // さらに1秒進める
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText(/カウントダウン:/)).toHaveTextContent('カウントダウン: 8');
    });

    test('カウントが0になるとアラートが表示される', () => {
        window.alert = jest.fn(); // アラートをモック

        render(<CountdownTimer />);
        const button = screen.getByRole('button', { name: /タイマー開始/i });
        
        act(() => {
            fireEvent.click(button); // ボタンクリックをシミュレート
        });

        // 9回進めてカウントを0にする
        for (let i = 0; i < 9; i++) {
            act(() => {
                jest.advanceTimersByTime(1000);
            });
        }

        // カウントが0になったらアラートが表示されることを確認
        act(() => {
            jest.advanceTimersByTime(1000); // 最後の1秒を進める
        });
        expect(window.alert).toHaveBeenCalledWith('時間切れです！');
    });
});
