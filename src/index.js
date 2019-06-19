require('@babel/register')({
    extends: './src/.babelrc',
    ignore: [/node_modules/]
});
require('dotenv').config();

const app = require('./app.js');

app.default.start(() => {
    console.log(`Server ready on port ${process.env.PORT}`);
});
