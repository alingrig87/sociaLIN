const express = require('express');
const router = express.Router();

// @route         GET api/users
// @description   Test route
// @access        Public
router.get('/', (request, response) => response.send('Test profile Route'));

module.exports = router;
