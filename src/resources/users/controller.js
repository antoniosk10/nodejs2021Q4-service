const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');

const getAllUsers = (req, res) => {
  res.send(db);
};

const getUser = (req, res) => {
  const { id } = req.params;

  const user = db.find((el) => el.id === id);

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
  const { id } = req.params;
  const index = findIndexElement(db, id);

  db.splice(index, 1);

  res.send({ message: `User ${id} has been removed` });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, login, password } = req.body;
  const index = findIndexElement(db, id);

  db[index] = { id: db[index].id, name, login, password };

  res.send({ id, name, login, password });
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
