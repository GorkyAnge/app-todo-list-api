const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Crear una tarea
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Listar tareas
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Eliminar tarea
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Actualizar estado
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    if (!task) return res.status(404).json({ error: "Task not found" });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
