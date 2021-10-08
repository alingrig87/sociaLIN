const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route         GET api/auth
// @description   Test route
// @access        Public
router.get('/', auth, async (request, response) => {
	try {
		const user = await User.findById(request.user.id).select('-password');
		response.json(user);
	} catch (error) {
		console.log(error.message);
		response.status(500).send('Server error');
	}
});

module.exports = router;
