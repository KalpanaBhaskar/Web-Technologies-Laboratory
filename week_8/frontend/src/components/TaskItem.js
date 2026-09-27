import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task._id)}
          className="task-checkbox"
        />
        <span className="task-text">{task.task}</span>
      </div>
      <button 
        onClick={() => onDelete(task._id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
