const express = require('express');
const http = require('http');
const web = require('./web/app');
const websockets = require('./websockets');

const app = express();
const server = http.createServer(app);

app.start = async cb => {
    websockets.default.start(server);
    await web.start();

    app.use('/', web);

    server.listen(process.env.PORT, () => {
        cb();
    });
};

module.exports = app;
