'use strict';

const router = require('express').Router();
const clientController = require('./controllers/client.controller');

router.post('/', clientController.create);
router.get('/', clientController.getAll);
router.get('/:id', clientController.getOne);
router.put('/:id', clientController.update);
router.delete('/:id', clientController.delete);

module.exports = router;