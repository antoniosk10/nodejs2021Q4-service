const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');
const dbTask = require('../tasks/db');

const getAllUsers = (req, res) => {
  res.send(db);
};

const getUser = (req, res) => {
  const { userId } = req.params;

  const user = db.find((el) => el.id === userId);

  res.send(user);
};

const addUser = (req, res) => {
  const { name, login, password } = req.body;
  const user = {
    id: uuidv4(),
    name,
    login,
    password,
  };

  db.push(user);

  res.code(201).send(user);
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  const index = findIndexElement(db, userId);

  const updatedTasks = dbTask.map((el) =>
    el.userId === userId ? { ...el, userId: null } : el
  );
  dbTask.length = 0;
  dbTask.push(...updatedTasks);
  db.splice(index, 1);

  res.send({ message: `User ${userId} has been removed` });
};

const updateUser = (req, res) => {
  const { userId } = req.params;
  const { name, login, password } = req.body;
  const index = findIndexElement(db, userId);

  db[index] = { id: db[index].id, name, login, password };

  res.send({ userId, name, login, password });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
