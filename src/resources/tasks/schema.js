const {
  getAllTasksController,
  getTaskController,
  addTaskController,
  deleteTaskController,
  updateTaskController,
} = require('./controller');

const taskSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: ['string', 'null'] },
    boardId: { type: 'string' },
    columnId: { type: ['string', 'null'] },
  },
};

const getAllTasksSchema = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: taskSchema,
      },
    },
  },
  handler: getAllTasksController,
};

const getTaskSchema = {
  schema: {
    response: {
      200: taskSchema,
    },
  },
  handler: getTaskController,
};

const addTaskSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['title', 'order', 'description', 'userId', 'boardId'],
      properties: {
        title: { type: 'string' },
        order: { type: 'number' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        boardId: { type: 'string' },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      201: taskSchema,
    },
  },
  handler: addTaskController,
};

const deleteTaskSchema = {
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
  handler: deleteTaskController,
};

const updateTaskSchema = {
  schema: {
    body: {
      type: 'object',
      required: [
        'title',
        'order',
        'description',
        'userId',
        'boardId',
        'columnId',
      ],
      properties: {
        title: { type: 'string' },
        order: { type: 'number' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        boardId: { type: 'string' },
        columnId: { type: ['string', 'null'] },
      },
    },
    response: {
      200: taskSchema,
    },
  },
  handler: updateTaskController,
};

module.exports = {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
};
