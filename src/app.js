import express from 'express';
import http from 'http';
import compression from 'compression';
import websockets from './websockets';
import web from './web';
import enforce from 'express-sslify';
import helmet from 'helmet';

const app = express();
const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(compression());
app.use(helmet());

app.start = async cb => {
    await web.start();

    app.use('/', web);
    websockets.start(server);

    server.listen(process.env.PORT, () => {
        cb();
    });
};

export default app;
