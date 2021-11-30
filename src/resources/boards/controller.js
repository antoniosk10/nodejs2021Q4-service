const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');

const getAllBoards = (req, res) => {
  res.send(db);
};

const getBoard = (req, res) => {
  const { id } = req.params;

  const board = db.find((el) => el.id === id);

  res.send(board);
};

const addBoard = (req, res) => {
  const { title, columns } = req.body;
  const board = {
    id: uuidv4(),
    title,
    columns,
  };

  db.push(board);

  res.code(201).send(board);
};

const deleteBoard = (req, res) => {
  const { id } = req.params;
  const index = findIndexElement(db, id);

  db.splice(index, 1);

  res.send({ message: `Board ${id} has been removed` });
};

const updateBoard = (req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const index = findIndexElement(db, id);

  db[index] = { id: db[index].id, title, columns };

  res.send({ id, title, columns });
};

module.exports = {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  updateBoard,
};
