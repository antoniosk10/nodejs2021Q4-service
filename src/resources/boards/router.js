const {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  deleteBoardSchema,
  updateBoardSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/boards', getAllBoardsSchema);
  fastify.get('/boards/:boardId', getBoardSchema);
  fastify.post('/boards', addBoardSchema);
  fastify.delete('/boards/:boardId', deleteBoardSchema);
  fastify.put('/boards/:boardId', updateBoardSchema);

  done();
};
