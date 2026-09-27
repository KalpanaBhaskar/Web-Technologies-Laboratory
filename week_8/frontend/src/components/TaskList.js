import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ todos, onToggleComplete, onDelete }) => {
  if (todos.length === 0) {
    return <div className="empty-state">No tasks yet. Add one above!</div>;
  }

  return (
    <div className="task-list">
      {todos.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
