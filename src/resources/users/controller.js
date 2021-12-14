const {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require('./services');

const getAllUsersController = (req, res) => getAllUsers(req, res);
const getUserController = (req, res) => getUser(req, res);
const addUserController = (req, res) => addUser(req, res);
const deleteUserController = (req, res) => deleteUser(req, res);
const updateUserController = (req, res) => updateUser(req, res);

module.exports = {
  getAllUsersController,
  getUserController,
  addUserController,
  deleteUserController,
  updateUserController,
};
