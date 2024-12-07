const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Crear una tarea
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
