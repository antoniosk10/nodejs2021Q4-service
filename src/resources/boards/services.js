const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');
const dbTask = require('../tasks/db');

const getAllBoards = (req, res) => {
  res.send(db);
};

const getBoard = (req, res) => {
  const { boardId } = req.params;

  const board = db.find((el) => el.id === boardId);
  if (board) {
    res.send(board);
  } else {
    res.code(404).send({ message: "Board doesn't exist" });
  }
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
  const { boardId } = req.params;
  const index = findIndexElement(db, boardId);
  const updatedTasks = dbTask.filter((el) => el.boardId !== boardId);
  dbTask.length = 0;
  dbTask.push(...updatedTasks);
  db.splice(index, 1);

  res.send({ message: `Board ${boardId} has been removed` });
};

const updateBoard = (req, res) => {
  const { boardId } = req.params;
  const { title, columns } = req.body;
  const index = findIndexElement(db, boardId);

  db[index] = { id: db[index].id, title, columns };

  res.send({ boardId, title, columns });
};

module.exports = {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  updateBoard,
};
