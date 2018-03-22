var handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/test', handler.test);
router.post('/bringdown', handler.bringdown);
router.post('/restart', handler.restart);

module.exports = router;