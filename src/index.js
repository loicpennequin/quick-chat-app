require('dotenv').config();

const app = require('./app.js');

app.start(() => {
    console.log(`Server ready on port ${process.env.PORT}`);
});
