const {
  getAllColumnsController,
  getColumnController,
  addColumnController,
  deleteColumnController,
  updateColumnController,
} = require('./controller');

const columnSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
  },
};

const getAllColumnsSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: columnSchema,
      },
    },
  },
  handler: getAllColumnsController,
};

const getColumnSchema = {
  schema: {
    response: {
      200: columnSchema,
    },
  },
  handler: getColumnController,
};

const addColumnSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order'],
      properties: {
        title: { type: 'string' },
        order: { type: 'number' },
      },
    },
    response: {
      201: columnSchema,
    },
  },
  handler: addColumnController,
};

const deleteColumnSchema = {
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
  handler: deleteColumnController,
};

const updateColumnSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order'],
      properties: {
        title: { type: 'string' },
        order: { type: 'number' },
      },
    },
    response: {
      200: columnSchema,
    },
  },
  handler: updateColumnController,
};

module.exports = {
  getAllColumnsSchema,
  getColumnSchema,
  addColumnSchema,
  deleteColumnSchema,
  updateColumnSchema,
};
