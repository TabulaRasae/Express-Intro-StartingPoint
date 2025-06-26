const express = require("express");
const router = express.Router();
const { Task, User } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  const tasks = Task.findAll();
  // const users = User.findAll();
  // res.send(users)
  res.send(tasks)
  // res.status(501).send("Not implemented");
});

// GET a single task by id
router.get("/:id" , (req, res) => {
  const id = Number(req.params.id);
  const task = Task.findByPk(id);
  res.send(task)
})
// Patch a task by id
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const changes = req.body;
  Task.update(id, changes);
  res.sendStatus(200)
})

// Delete a task by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  Task.delete(id)
})
// Create a new task
router.post("/", (req,res) => {
  const task = req.body;
  Task.create(task);
  res.sendStatus(201);
})
module.exports = router;

"api/task"