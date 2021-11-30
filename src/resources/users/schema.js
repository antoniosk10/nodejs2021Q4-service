const {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require('./controller');

const userSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' },
  },
};

const userHidePassSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    login: { type: 'string' },
  },
};

const getAllUsersSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: userHidePassSchema,
      },
    },
  },
  handler: getAllUsers,
};

const getUserSchema = {
  schema: {
    response: {
      200: userHidePassSchema,
    },
  },
  handler: getUser,
};

const addUserSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      201: userHidePassSchema,
    },
  },
  handler: addUser,
};

const deleteUserSchema = {
  schema: {
    response: {
      204: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteUser,
};

const updateUserSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'login', 'password'],
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
    response: {
      200: userSchema,
    },
  },
  handler: updateUser,
};

module.exports = {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  deleteUserSchema,
  updateUserSchema,
};
