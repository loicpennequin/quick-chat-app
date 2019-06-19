import express from 'express';
import http from 'http';
import compression from 'compression';
import websockets from './websockets';
import web from './web';

const app = express();
app.use(compression());
const server = http.createServer(app);

app.start = async cb => {
    await web.start();

    app.use('/', web);
    websockets.start(server);

    server.listen(process.env.PORT, () => {
        cb();
    });
};

export default app;
