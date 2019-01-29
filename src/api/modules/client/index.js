'use strict';

const router = require('express').Router();
const todoController = require('./controllers/client.controller');

router.post('/', todoController.create);
router.get('/', todoController.getAll);
router.get('/:id', todoController.getOne);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);

module.exports = router;