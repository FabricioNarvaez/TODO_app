const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);
router.post('/', controller.update);
router.post('/rm/:value', controller.remove);

module.exports = router;