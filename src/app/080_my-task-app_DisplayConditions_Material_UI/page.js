"use client";

import { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Checkbox, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        タスク管理アプリ
      </Typography>
      <TextField 
        fullWidth 
        variant="outlined" 
        label="新しいタスクを追加" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={addTask} 
        style={{ marginTop: '1rem' }}
      >
        追加
      </Button>

      {tasks.length === 0 ? (
        <Typography variant="body1" align="center" style={{ marginTop: '1rem' }}>
          タスクがありません。
        </Typography>
      ) : (
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} dense onClick={() => toggleTask(index)}>
              <Checkbox checked={task.completed} />
              <ListItemText 
                primary={task.text} 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
              />
              <IconButton edge="end" aria-label="delete" onClick={(event) => {
                  event.stopPropagation(); // イベントのバブリングを防ぐ
                  deleteTask(index);
              }}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}