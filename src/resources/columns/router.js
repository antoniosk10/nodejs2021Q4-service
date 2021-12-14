const {
  getAllColumnsSchema,
  getColumnSchema,
  addColumnSchema,
  deleteColumnSchema,
  updateColumnSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/columns', getAllColumnsSchema);
  fastify.get('/columns/:id', getColumnSchema);
  fastify.post('/columns', addColumnSchema);
  fastify.delete('/columns/:id', deleteColumnSchema);
  fastify.put('/columns/:id', updateColumnSchema);

  done();
};
