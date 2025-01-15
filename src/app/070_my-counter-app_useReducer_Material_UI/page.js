"use client"
import React, { useReducer } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Container maxWidth="sm">
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    height: '100vh' 
                }}
            >
                <Typography variant="h4" gutterBottom>
                    カウント: {state.count}
                </Typography>
                <Box>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => dispatch({ type: 'increment' })} 
                        sx={{ margin: 1 }}
                    >
                        増加
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => dispatch({ type: 'decrement' })} 
                        sx={{ margin: 1 }}
                    >
                        減少
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="default" 
                        onClick={() => dispatch({ type: 'reset' })} 
                        sx={{ margin: 1 }}
                    >
                        リセット
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Counter;
