'use strict';

module.exports = app => {
    app.use('/api/client', require('./modules/client'));
};