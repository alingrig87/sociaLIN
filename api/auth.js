const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route         GET api/auth
// @description   Test route
// @access        Public
router.get('/', auth, (request, response) => response.send('Test Auth Route'));

module.exports = router;
