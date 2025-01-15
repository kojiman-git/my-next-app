import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';
import { LanguageProvider } from '../context/LanguageContext';

describe('Home Component', () => {
    const renderWithProvider = () => {
        return render(
            <LanguageProvider>
                <Home />
            </LanguageProvider>
        );
    };

    test('初期言語が英語で表示されること', () => {
        renderWithProvider();
        expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!');
    });

    test('ボタンをクリックすると日本語に切り替わること', () => {
        renderWithProvider();
        
        const button = screen.getByRole('button', { name: /Switch to Japanese/i });
        fireEvent.click(button);
        
        expect(screen.getByRole('heading')).toHaveTextContent('こんにちは、世界！');
        expect(button).toHaveTextContent('英語に切り替え');
    });

    test('再度ボタンをクリックすると英語に戻ること', () => {
        renderWithProvider();
        
        const button = screen.getByRole('button', { name: /Switch to Japanese/i });
        fireEvent.click(button); // 日本語に切り替え
        fireEvent.click(button); // 英語に戻す
        
        expect(screen.getByRole('heading')).toHaveTextContent('Hello, World!');
        expect(button).toHaveTextContent('Switch to Japanese');
    });
});
