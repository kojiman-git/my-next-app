"use client";
import React, { useState, useEffect } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`フィードバック送信: ${feedback}`);
        setFeedback('');
    };

    const handleResize = () => {
        console.log('ウィンドウサイズが変更されました');
    };

    const handleScroll = () => {
        console.log('ページがスクロールされました');
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <h1>フィードバックフォーム</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ border: isFocused ? '2px solid blue' : '1px solid gray' }}
                />
                <button
                    type="submit"
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'lightblue')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                    onDoubleClick={() => setFeedback('')}
                >
                    送信
                </button>
            </form>
            <p>リアルタイムフィードバック: {feedback}</p>
        </div>
    );
};

export default FeedbackForm;
