const { v4: uuidv4 } = require('uuid');
const db = require('./db');
const findIndexElement = require('../../utils/findIndexElement');

const getAllColumns = (req, res) => {
  res.send(db);
};

const getColumn = (req, res) => {
  const { id } = req.params;

  const column = db.find((el) => el.id === id);

  res.send(column);
};

const addColumn = (req, res) => {
  const { title, order } = req.body;
  const column = {
    id: uuidv4(),
    title,
    order,
  };

  db.push(column);

  res.code(201).send(column);
};

const deleteColumn = (req, res) => {
  const { id } = req.params;
  const index = findIndexElement(db, id);

  db.splice(index, 1);

  res.send({ message: `Column ${id} has been removed` });
};

const updateColumn = (req, res) => {
  const { id } = req.params;
  const { title, order } = req.body;
  const index = findIndexElement(db, id);

  db[index] = { id: db[index].id, title, order };

  res.send({ id, title, order });
};

module.exports = {
  getAllColumns,
  getColumn,
  addColumn,
  deleteColumn,
  updateColumn,
};
