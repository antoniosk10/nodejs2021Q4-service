const {
  getAllTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
} = require('./controller');

const taskSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    order: { type: 'number' },
    description: { type: 'string' },
    userId: { type: 'string' },
    boardId: { type: 'string' },
    columnId: { type: 'string' },
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
  handler: getAllTasks,
};

const getTaskSchema = {
  schema: {
    response: {
      200: taskSchema,
    },
  },
  handler: getTask,
};

const addTaskSchema = {
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
        userId: { type: 'string' },
        boardId: { type: 'string' },
        columnId: { type: 'string' },
      },
    },
    response: {
      201: taskSchema,
    },
  },
  handler: addTask,
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
  handler: deleteTask,
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
        userId: { type: 'string' },
        boardId: { type: 'string' },
        columnId: { type: 'string' },
      },
    },
    response: {
      200: taskSchema,
    },
  },
  handler: updateTask,
};

module.exports = {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
};
