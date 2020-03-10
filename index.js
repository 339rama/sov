const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json({ extended: true }));

app.use('/api', require('./routes/apiRouter.js'));

function start() {
    try {
        app.listen(PORT, 'localhost', function () {
            console.log(`Сервер ожидает подключения ${PORT}...`);
        });
    } catch (error) {
        throw new Error('Проблемы с подключением к серверу', error);
    }
}

start();