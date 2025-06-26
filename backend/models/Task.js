//Mongoose schema definition for each task (title, description, assignee, status).

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  assignedTo: {
    type: String,
    required: [true, 'Assigned to is required'],
    trim: true
  },
  status: {
    type: String,
    required: true,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Add indexes for better query performance
taskSchema.index({ status: 1 });
taskSchema.index({ assignedTo: 1 });

module.exports = mongoose.model('Task', taskSchema);