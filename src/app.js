const app = require('fastify')();
const path = require('path');

app.register(require('./resources/users/router'));
app.register(require('./resources/boards/router'));
app.register(require('./resources/columns/router'));
app.register(require('./resources/tasks/router'));

app.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  mode: 'static',
  swagger: {
    info: { title: 'Trello Service' },
  },
  specification: { path: path.join(__dirname, '../doc/api.yaml') },
});

module.exports = app;
