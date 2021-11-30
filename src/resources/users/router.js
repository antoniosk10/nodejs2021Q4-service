const {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  deleteUserSchema,
  updateUserSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/users', getAllUsersSchema);
  fastify.get('/users/:id', getUserSchema);
  fastify.post('/users', addUserSchema);
  fastify.delete('/users/:id', deleteUserSchema);
  fastify.put('/users/:id', updateUserSchema);

  done();
};
