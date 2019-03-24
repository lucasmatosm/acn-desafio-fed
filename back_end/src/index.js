'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.PORT;
const connStr = process.env.DB_CONNECTION;

const app = express();

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://18.228.227.88:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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