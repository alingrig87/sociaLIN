const express = require('express');
const router = express.Router();

// @route         GET api/auth
// @description   Test route
// @access        Public
router.get('/', (request, response) => response.send('Test Auth Route'));

module.exports = router;
