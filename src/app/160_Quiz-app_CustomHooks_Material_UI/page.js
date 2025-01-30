"use client";
import React from 'react';
import { Button, Container, Typography, Card, CardContent, CardActions } from '@mui/material';
import useQuiz from './hooks/useQuiz';

const HomePage = () => {
    const { currentQuestion, score, isFinished, answerQuestion, resetQuiz } = useQuiz();

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                クイズアプリ
            </Typography>
            {isFinished ? (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" align="center">
                            結果: {score} / {currentQuestion.id}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={resetQuiz} fullWidth>
                            再挑戦
                        </Button>
                    </CardActions>
                </Card>
            ) : (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5">{currentQuestion.question}</Typography>
                        <ul>
                            {currentQuestion.options.map(option => (
                                <li key={option}>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => answerQuestion(option)} 
                                        fullWidth 
                                        style={{ margin: '8px 0' }}
                                    >
                                        {option}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default HomePage;
