"use client";

import { useState } from 'react';

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
    <div>
      <h1>タスク管理アプリ</h1>
      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
        placeholder="新しいタスクを追加"
      />
      <button onClick={addTask}>追加</button>

      {tasks.length === 0 ? (
        <p>タスクがありません。</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(index)}>削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
