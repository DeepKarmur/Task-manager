import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <div className="no-tasks">
          <h3>No tasks found</h3>
          <p>Create your first task or adjust your filters to see tasks.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h3>Tasks ({tasks.length})</h3>
      <div className="tasks-container">
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;