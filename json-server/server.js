const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware de validação de contrato
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST' && req.path === '/users') {
        const { name, username, email } = req.body;

        if (!name || typeof name !== 'string' || name.trim() === '') {
            return res.status(400).json({ error: 'O campo "name" é obrigatório e deve ser uma string válida.' });
        }

        if (!username || typeof username !== 'string' || username.trim() === '') {
            return res.status(400).json({ error: 'O campo "username" é obrigatório e deve ser uma string válida.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
            return res.status(400).json({ error: 'O campo "email" é obrigatório e deve ser um email válido.' });
        }
    }
    next();
});

server.use(middlewares);
server.use(router);
server.listen(3030, () => {
    console.log('JSON Server está rodando na porta 3030');
});
/*
Validação de campos obrigatórios: Verifica se name, username e email existem.
Validação de tipo: Todos os campos devem ser string e não podem ser vazios.
Validação de email: Regex para garantir um formato válido de email.
*/