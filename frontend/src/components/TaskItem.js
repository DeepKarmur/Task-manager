import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onStatusChange }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'To Do':
        return 'status-todo';
      case 'In Progress':
        return 'status-progress';
      case 'Done':
        return 'status-done';
      default:
        return '';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = (e) => {
    onStatusChange(task._id, e.target.value);
  };

  return (
    <div className={`task-item ${getStatusClass(task.status)}`}>
      <div className="task-header">
        <h4 className="task-title">{task.title}</h4>
        <div className="task-actions">
          <button
            className="btn btn-edit"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            ✏️
          </button>
          <button
            className="btn btn-delete"
            onClick={() => onDelete(task._id)}
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="task-body">
        <p className="task-description">{task.description}</p>
        
        <div className="task-meta">
          <div className="task-assignee">
            <strong>Assigned to:</strong> {task.assignedTo}
          </div>
          
          <div className="task-status-selector">
            <label htmlFor={`status-${task._id}`}>
              <strong>Status:</strong>
            </label>
            <select
              id={`status-${task._id}`}
              value={task.status}
              onChange={handleStatusChange}
              className={`status-select ${getStatusClass(task.status)}`}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </div>

        <div className="task-dates">
          <small>
            <strong>Created:</strong> {formatDate(task.createdAt)}
            {task.updatedAt !== task.createdAt && (
              <span> | <strong>Updated:</strong> {formatDate(task.updatedAt)}</span>
            )}
          </small>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;