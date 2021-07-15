const jsonServer = require('json-server');

// Create a server 
const server = jsonServer.create();

//Get the routers
const router = jsonServer.router('db.json');

//Some Middlewares
const middlewares = jsonServer.defaults();

//The Port we Serve to 
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);