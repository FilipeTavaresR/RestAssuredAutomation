const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para validar o campo "name"
server.use((req, res, next) => {
    if (req.method === 'POST' && req.path === '/users') {
        if (!req.body.name) {
            return res.status(400).json({ error: 'O campo "name" é obrigatório.' });
        }
    }
    next();
});

server.use(router);
server.listen(3000, () => {
    console.log('JSON Server está rodando na porta 3000');
});