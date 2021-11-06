let jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
 static: './build',
});

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 8000, () => {
 console.log(`JSON Server is running on 8000`);
});
