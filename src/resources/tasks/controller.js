const {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
} = require('./services');

const getAllTasksController = (req, res) => getAllTasks(req, res);
const getTaskController = (req, res) => getTask(req, res);
const addTaskController = (req, res) => addTask(req, res);
const deleteTaskController = (req, res) => deleteTask(req, res);
const updateTaskController = (req, res) => updateTask(req, res);

module.exports = {
  getAllTasksController,
  getTaskController,
  addTaskController,
  deleteTaskController,
  updateTaskController,
};
