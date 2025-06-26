//Defines API endpoints (/api/tasks) and maps them to controller functions.

const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// @route   GET /api/tasks
// @desc    Get all tasks with optional filtering
// @access  Public
router.get('/', getTasks);

// @route   GET /api/tasks/:id
// @desc    Get single task
// @access  Public
router.get('/:id', getTask);

// @route   POST /api/tasks
// @desc    Create new task
// @access  Public
router.post('/', createTask);

// @route   PUT /api/tasks/:id
// @desc    Update task
// @access  Public
router.put('/:id', updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete task
// @access  Public
router.delete('/:id', deleteTask);

module.exports = router;