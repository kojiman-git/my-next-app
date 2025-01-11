"use client"; 
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null); // 編集するTODOのID
  const [editValue, setEditValue] = useState(''); // 編集用の値

  const addTodo = () => {
    if (inputValue) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditValue(todo.text);
  };

  const updateTodo = () => {
    if (editValue) {
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, text: editValue } : todo)));
      setEditId(null);
      setEditValue('');
    }
  };

  return (
    <div>
      <h1>TODOリスト</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="新しいTODOを入力"
      />
      <button onClick={addTodo}>追加</button>

      {editId && (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="TODOを編集"
          />
          <button onClick={updateTodo}>更新</button>
          <button onClick={() => setEditId(null)}>キャンセル</button>
        </div>
      )}

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => startEdit(todo)}>編集</button>
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
