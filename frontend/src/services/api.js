import axios from 'axios';

//const API_BASE_URL = 'http://localhost:5000/api';
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Task API functions
export const taskAPI = {
  // Get all tasks with optional filters
  getTasks: (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.status) params.append('status', filters.status);
    if (filters.assignedTo) params.append('assignedTo', filters.assignedTo);
    
    return api.get(`/tasks?${params.toString()}`);
  },

  // Get single task by ID
  getTask: (id) => {
    return api.get(`/tasks/${id}`);
  },

  // Create new task
  createTask: (taskData) => {
    return api.post('/tasks', taskData);
  },

  // Update task
  updateTask: (id, taskData) => {
    return api.put(`/tasks/${id}`, taskData);
  },

  // Delete task
  deleteTask: (id) => {
    return api.delete(`/tasks/${id}`);
  }
};

export default api;