const express = require('express');
const router = express.Router();

// @route         GET api/posts
// @description   Test route
// @access        Public
router.get('/', (request, response) => response.send('Test Posts Route'));

module.exports = router;
