import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from backend on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (error) {
      setError('Error fetching tasks. Please make sure the backend server is running.');
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskText) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: taskText, completed: false }),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const newTask = await response.json();
      setTodos([newTask, ...todos]);
      setError(null);
    } catch (error) {
      setError('Error adding task. Please try again.');
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = todos.find(t => t._id === id);
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !task.completed }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task');
      }

      const updatedTask = await response.json();
      setTodos(todos.map(t => t._id === id ? updatedTask : t));
      setError(null);
    } catch (error) {
      setError('Error updating task. Please try again.');
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      setTodos(todos.filter(t => t._id !== id));
      setError(null);
    } catch (error) {
      setError('Error deleting task. Please try again.');
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>MERN Todo Application</h1>
        <p className="subtitle">Manage your tasks with MongoDB, Express, React, and Node.js</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <TaskForm onAddTask={addTask} />
        
        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList 
            todos={todos} 
            onToggleComplete={toggleComplete} 
            onDelete={deleteTask} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
