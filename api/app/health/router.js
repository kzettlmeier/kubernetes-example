var handler = require('./handler');
const express = require('express');
const router = express.Router();

router.get('/liveness', handler.liveness);
router.get('/readiness', handler.readiness);

module.exports = router;