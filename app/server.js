const express = require('express');
const router = require('./router');

const port = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');
server.use(express.static('./static'));
server.use(router);

server.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
})