"use client"
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function MemoInput({ addMemo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addMemo(input);
      setInput('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいメモを追加"
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">追加</Button>
    </Box>
  );
}
