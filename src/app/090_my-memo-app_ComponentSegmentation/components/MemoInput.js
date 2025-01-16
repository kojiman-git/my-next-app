"use client"
import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいメモを追加"
      />
      <button type="submit">追加</button>
    </form>
  );
}
