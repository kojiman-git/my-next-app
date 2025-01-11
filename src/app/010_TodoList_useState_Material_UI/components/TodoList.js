"use client"; 
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

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
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        TODOリスト
      </Typography>

      <TextField
        label="新しいTODOを入力"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodo} style={{ marginTop: '10px' }}>
        追加
      </Button>

      {editId && (
        <div style={{ marginTop: '10px' }}>
          <TextField
            label="TODOを編集"
            variant="outlined"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={updateTodo} style={{ marginLeft: '10px' }}>
            更新
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => setEditId(null)} style={{ marginLeft: '10px' }}>
            キャンセル
          </Button>
        </div>
      )}

      <List style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => startEdit(todo)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
