const {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  deleteBoardSchema,
  updateBoardSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/boards', getAllBoardsSchema);
  fastify.get('/boards/:id', getBoardSchema);
  fastify.post('/boards', addBoardSchema);
  fastify.delete('/boards/:id', deleteBoardSchema);
  fastify.put('/boards/:id', updateBoardSchema);

  done();
};
