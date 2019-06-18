const express = require('express');
const http = require('http');
const websockets = require('./websockets');
const web = require('./web/app');

const app = express();
const server = http.createServer(app);

app.start = async cb => {
    await web.start();

    app.use('/', web);
    websockets.default.start(server);

    server.listen(process.env.PORT, () => {
        cb();
    });
};

module.exports = app;
