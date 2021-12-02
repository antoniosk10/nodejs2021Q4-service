const {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/boards/:boardId/tasks', getAllTasksSchema);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskSchema);
  fastify.post('/boards/:boardId/tasks', addTaskSchema);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskSchema);
  fastify.put('/boards/:boardId/tasks/:taskId', updateTaskSchema);

  done();
};
