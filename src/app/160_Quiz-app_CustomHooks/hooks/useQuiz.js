import { useState } from 'react';

const questions = [
    { id: 1, question: "日本の首都はどこですか？", options: ["東京", "大阪", "京都"], answer: "東京" },
    { id: 2, question: "2 + 2 はいくつですか？", options: ["3", "4", "5"], answer: "4" },
    { id: 3, question: "Reactは何のために使われますか？", options: ["スタイル", "データベース", "ユーザーインターフェース"], answer: "ユーザーインターフェース" },
];

const useQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const answerQuestion = (answer) => {
        if (questions[currentQuestionIndex].answer === answer) {
            setScore(score + 1);
        }
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsFinished(false);
    };

    return { currentQuestion: questions[currentQuestionIndex], score, isFinished, answerQuestion, resetQuiz };
};

export default useQuiz;
