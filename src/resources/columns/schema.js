const {
  getAllColumns,
  getColumn,
  addColumn,
  deleteColumn,
  updateColumn,
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
  handler: getAllColumns,
};

const getColumnSchema = {
  schema: {
    response: {
      200: columnSchema,
    },
  },
  handler: getColumn,
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
  handler: addColumn,
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
  handler: deleteColumn,
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
  handler: updateColumn,
};

module.exports = {
  getAllColumnsSchema,
  getColumnSchema,
  addColumnSchema,
  deleteColumnSchema,
  updateColumnSchema,
};
