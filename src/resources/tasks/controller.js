const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');

const getAllTasks = (req, res) => {
  res.send(db);
};

const getTask = (req, res) => {
  const { id } = req.params;

  const task = db.find((el) => el.id === id);

  res.send(task);
};

const addTask = (req, res) => {
  const { title, order, description, userId, boardId, columnId } = req.body;
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
  const { id } = req.params;
  const index = findIndexElement(db, id);

  db.splice(index, 1);

  res.send({ message: `Task ${id} has been removed` });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, order, description, userId, boardId, columnId } = req.body;
  const index = findIndexElement(db, id);

  db[index] = {
    id: db[index].id,
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  };

  res.send({ id, title, order, description, userId, boardId, columnId });
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
};
