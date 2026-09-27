import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newTodo.trim() === '') {
      return;
    }

    onAddTask(newTodo.trim());
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
