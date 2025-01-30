import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../Page';
import useQuiz from '../hooks/useQuiz';

// useQuiz フックをモックする
jest.mock('../hooks/useQuiz');

describe('HomePage', () => {
    beforeEach(() => {
        // useQuiz フックが返すモックの値
        useQuiz.mockReturnValue({
            currentQuestion: { id: 1, question: "日本の首都はどこですか？", options: ["東京", "大阪", "京都"] },
            score: 0,
            isFinished: false,
            answerQuestion: jest.fn(),
            resetQuiz: jest.fn(),
        });
    });

    it('クイズの質問と選択肢が表示されること', () => {
        render(<HomePage />);

        expect(screen.getByText('クイズアプリ')).toBeInTheDocument();
        expect(screen.getByText("日本の首都はどこですか？")).toBeInTheDocument();
        expect(screen.getByText("東京")).toBeInTheDocument();
        expect(screen.getByText("大阪")).toBeInTheDocument();
        expect(screen.getByText("京都")).toBeInTheDocument();
    });

    it('選択肢がクリックされたときにanswerQuestionが呼ばれること', () => {
        const mockAnswerQuestion = jest.fn();
        useQuiz.mockReturnValue({
            currentQuestion: { id: 1, question: "日本の首都はどこですか？", options: ["東京", "大阪", "京都"] },
            score: 0,
            isFinished: false,
            answerQuestion: mockAnswerQuestion,
            resetQuiz: jest.fn(),
        });

        render(<HomePage />);
        const optionButton = screen.getByText("東京");
        fireEvent.click(optionButton);

        expect(mockAnswerQuestion).toHaveBeenCalledWith("東京");
    });

    it('クイズが終了したときにスコアが表示されること', () => {
        useQuiz.mockReturnValue({
            currentQuestion: { id: 1, question: "日本の首都はどこですか？", options: ["東京", "大阪", "京都"] },
            score: 2,
            isFinished: true,
            answerQuestion: jest.fn(),
            resetQuiz: jest.fn(),
        });

        render(<HomePage />);

        expect(screen.getByText('結果: 2 / 1')).toBeInTheDocument();
        expect(screen.getByText('再挑戦')).toBeInTheDocument();
    });

    it('「再挑戦」ボタンがクリックされたときにresetQuizが呼ばれること', () => {
        const mockResetQuiz = jest.fn();
        useQuiz.mockReturnValue({
            currentQuestion: { id: 1, question: "日本の首都はどこですか？", options: ["東京", "大阪", "京都"] },
            score: 2,
            isFinished: true,
            answerQuestion: jest.fn(),
            resetQuiz: mockResetQuiz,
        });

        render(<HomePage />);
        const resetButton = screen.getByText('再挑戦');
        fireEvent.click(resetButton);

        expect(mockResetQuiz).toHaveBeenCalled();
    });
});
