const {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  deleteUserSchema,
  updateUserSchema,
} = require('./schema');

module.exports = (fastify, options, done) => {
  fastify.get('/users', getAllUsersSchema);
  fastify.get('/users/:userId', getUserSchema);
  fastify.post('/users', addUserSchema);
  fastify.delete('/users/:userId', deleteUserSchema);
  fastify.put('/users/:userId', updateUserSchema);

  done();
};
