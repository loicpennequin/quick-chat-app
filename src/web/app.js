import express from 'express';
import next from 'next';

const app = express();
const nextApp = next({
    dir: __dirname,
    dev: process.env.NODE_ENV === 'development',
    quiet: process.env.NODE_ENV === 'development'
});

app.start = async () => {
    const nextHandler = nextApp.getRequestHandler();

    try {
        await nextApp.prepare();

        app.get('*', nextHandler);
    } catch (err) {
        console.log(err.stack);
        process.exit(1);
    }
};

export default app;
