const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');

const getAllTasks = (req, res) => {
  const { boardId } = req.params;

  res.send(db.filter((el) => el.boardId === boardId));
};

const getTask = (req, res) => {
  const { taskId } = req.params;
  const task = db.find((el) => el.id === taskId);

  if (task) {
    res.send(task);
  } else {
    res.code(404).send({ message: "Task doesn't exist" });
  }
};

const addTask = (req, res) => {
  const { boardId } = req.params;
  const { title, order, description, columnId = null, userId } = req.body;
  const task = {
    id: uuidv4(),
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  db.push(task);

  res.code(201).send(task);
};

const deleteTask = (req, res) => {
  const { taskId } = req.params;
  const index = findIndexElement(db, taskId);

  db.splice(index, 1);

  res.send({ message: `Task ${taskId} has been removed` });
};

const updateTask = (req, res) => {
  const { taskId, boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const index = findIndexElement(db, taskId);

  db[index] = {
    id: db[index].id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  res.send({ taskId, title, order, description, userId, boardId, columnId });
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
};
