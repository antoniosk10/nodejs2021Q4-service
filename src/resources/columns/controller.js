const {
  getAllColumns,
  getColumn,
  addColumn,
  deleteColumn,
  updateColumn,
} = require('./services');

const getAllColumnsController = (req, res) => getAllColumns(req, res);
const getColumnController = (req, res) => getColumn(req, res);
const addColumnController = (req, res) => addColumn(req, res);
const deleteColumnController = (req, res) => deleteColumn(req, res);
const updateColumnController = (req, res) => updateColumn(req, res);

module.exports = {
  getAllColumnsController,
  getColumnController,
  addColumnController,
  deleteColumnController,
  updateColumnController,
};
