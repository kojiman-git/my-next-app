"use client"; 
import { useEffect, useState } from 'react';
import { Container, Button, Typography, Box } from '@mui/material';

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
        setCount(10); // カウントをリセット
        setIsActive(true);
    };

    return (
        <Box 
            sx={{ 
                padding: '40px', 
                borderRadius: '8px', 
                boxShadow: 3, 
                textAlign: 'center', 
                bgcolor: '#f5f5f5' 
            }}
        >
            <Typography variant="h2" gutterBottom>
                カウントダウン: {count}
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={startTimer} 
                disabled={isActive}
                sx={{ 
                    padding: '10px 20px', 
                    fontSize: '16px', 
                    borderRadius: '20px' 
                }}
            >
                タイマー開始
            </Button>
        </Box>
    );
};

export default function Home() {
    return (
        <Container sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh' 
        }}>
            <CountdownTimer />
        </Container>
    );
}
