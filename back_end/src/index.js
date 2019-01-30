'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT;
const connStr = process.env.DB_CONNECTION;

const app = express();

app.use(bodyParser.json());
require('./api/routes')(app);

(async () => {
    try {
        console.log(`Trying to connect to mongo on ${connStr}...`);
        await mongoose.connect(connStr, { useNewUrlParser: true });
        console.log('Mongo connected.');
        await app.listen(port);
        console.log(`Server listening on port ${port}...`);
    } catch (err) {
        console.error(err);
    }
})();