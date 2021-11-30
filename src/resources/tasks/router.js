const {
  getAllTasksSchema,
  getTaskSchema,
  addTaskSchema,
  deleteTaskSchema,
  updateTaskSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/tasks', getAllTasksSchema);
  fastify.get('/tasks/:id', getTaskSchema);
  fastify.post('/tasks', addTaskSchema);
  fastify.delete('/tasks/:id', deleteTaskSchema);
  fastify.put('/tasks/:id', updateTaskSchema);

  done();
};
