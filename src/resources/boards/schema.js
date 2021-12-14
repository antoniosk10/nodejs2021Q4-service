const {
  getAllBoardsController,
  getBoardController,
  addBoardController,
  deleteBoardController,
  updateBoardController,
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
  handler: getAllBoardsController,
};

const getBoardSchema = {
  schema: {
    response: {
      200: boardSchema,
    },
  },
  handler: getBoardController,
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
  handler: addBoardController,
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
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteBoardController,
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
  handler: updateBoardController,
};

module.exports = {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  deleteBoardSchema,
  updateBoardSchema,
};
