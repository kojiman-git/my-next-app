"use client"; 
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const [count, setCount] = useState(10); // 10秒からスタート
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive && count > 0) {
            timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
        } else if (count === 0) {
            alert('時間切れです！');
            setIsActive(false);
        }

        return () => clearInterval(timer); // クリーンアップ
    }, [isActive, count]);

    const startTimer = () => {
        setIsActive(true);
    };

    return (
        <div>
            <h1>カウントダウン: {count}</h1>
            <button onClick={startTimer} disabled={isActive}>
                タイマー開始
            </button>
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <h1>カウントダウンタイマー</h1>
            <CountdownTimer />
        </div>
    );
}
