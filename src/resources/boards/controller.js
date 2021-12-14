const {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  updateBoard,
} = require('./services');

const getAllBoardsController = (req, res) => getAllBoards(req, res);
const getBoardController = (req, res) => getBoard(req, res);
const addBoardController = (req, res) => addBoard(req, res);
const deleteBoardController = (req, res) => deleteBoard(req, res);
const updateBoardController = (req, res) => updateBoard(req, res);

module.exports = {
  getAllBoardsController,
  getBoardController,
  addBoardController,
  deleteBoardController,
  updateBoardController,
};
