const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);
router.post('/', controller.create);
router.post('/rm/:value', controller.remove);

module.exports = router;