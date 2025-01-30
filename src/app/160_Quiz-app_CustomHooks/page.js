"use client";
import useQuiz from './hooks/useQuiz';

const HomePage = () => {
    const { currentQuestion, score, isFinished, answerQuestion, resetQuiz } = useQuiz();

    return (
        <div>
            <h1>クイズアプリ</h1>
            {isFinished ? (
                <div>
                    <h2>結果: {score} / {currentQuestion.id}</h2>
                    <button onClick={resetQuiz}>再挑戦</button>
                </div>
            ) : (
                <div>
                    <h2>{currentQuestion.question}</h2>
                    <ul>
                        {currentQuestion.options.map(option => (
                            <li key={option}>
                                <button onClick={() => answerQuestion(option)}>{option}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HomePage;
