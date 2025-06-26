import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import { taskAPI } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    assignedTo: ''
  });

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Apply filters when tasks or filters change
  useEffect(() => {
    applyFilters();
  }, [tasks, filters]);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await taskAPI.getTasks();
      setTasks(response.data.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...tasks];

    if (filters.status) {
      filtered = filtered.filter(task => task.status === filters.status);
    }

    if (filters.assignedTo) {
      filtered = filtered.filter(task => 
        task.assignedTo.toLowerCase().includes(filters.assignedTo.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  };

  const handleCreateTask = async (taskData) => {
    try {
      setError('');
      const response = await taskAPI.createTask(taskData);
      setTasks([response.data.data, ...tasks]);
    } catch (err) {
      setError('Failed to create task');
      console.error('Error creating task:', err);
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      setError('');
      const response = await taskAPI.updateTask(id, taskData);
      setTasks(tasks.map(task => 
        task._id === id ? response.data.data : task
      ));
      setEditingTask(null);
    } catch (err) {
      setError('Failed to update task');
      console.error('Error updating task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        setError('');
        await taskAPI.deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (err) {
        setError('Failed to delete task');
        console.error('Error deleting task:', err);
      }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
        <p>Collaborative Task Management System</p>
      </header>

      <main className="App-main">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="task-form-section">
          <TaskForm
            onSubmit={editingTask ? 
              (data) => handleUpdateTask(editingTask._id, data) : 
              handleCreateTask
            }
            initialData={editingTask}
            isEditing={!!editingTask}
            onCancel={handleCancelEdit}
          />
        </div>

        <div className="task-list-section">
          <FilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            taskCount={filteredTasks.length}
            totalTasks={tasks.length}
          />

          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onStatusChange={(id, status) => handleUpdateTask(id, { status })}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;