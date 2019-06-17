const express = require('express');
const http = require('http');
const web = require('./web');
const websockets = require('./websockets');

const app = express();
const server = http.createServer(app);

app.start = async cb => {
    websockets.default.start(server);
    await web.default.start();

    app.use('/', web.default);

    server.listen(process.env.PORT, () => {
        cb();
    });
};

module.exports = app;
