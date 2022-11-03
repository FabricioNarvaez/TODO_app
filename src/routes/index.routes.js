const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);
router.post('/', controller.create);
router.post('/update/:value', controller.update);
router.post('/remove/:value', controller.remove);
router.get('*', controller.error);

module.exports = router;