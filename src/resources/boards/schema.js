const {
  getAllBoards,
  getBoard,
  addBoard,
  deleteBoard,
  updateBoard,
} = require('./controller');

const boardSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    columns: { type: 'array' },
  },
};

const getAllBoardsSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: boardSchema,
      },
    },
  },
  handler: getAllBoards,
};

const getBoardSchema = {
  schema: {
    response: {
      200: boardSchema,
    },
  },
  handler: getBoard,
};

const addBoardSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array' },
      },
    },
    response: {
      201: boardSchema,
    },
  },
  handler: addBoard,
};

const deleteBoardSchema = {
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
  handler: deleteBoard,
};

const updateBoardSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string' },
        columns: { type: 'array' },
      },
    },
    response: {
      200: boardSchema,
    },
  },
  handler: updateBoard,
};

module.exports = {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  deleteBoardSchema,
  updateBoardSchema,
};
