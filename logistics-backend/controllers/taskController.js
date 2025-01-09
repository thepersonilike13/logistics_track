// controllers/taskController.js
const Task = require('../models/taskModel');

// Create a new task
const createTask = async (req, res) => {
  try {
    const { description, assignedTo } = req.body;
    const task = new Task({ description, assignedTo });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error creating task' });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

module.exports = { createTask, getTasks };
    