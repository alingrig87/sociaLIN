const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route         GET api/users
// @description   Test route
// @access        Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'Please use a valid email').isEmail(),
		check(
			'password',
			'The password must contain at least 6 characters'
		).isLength({ min: 6 }),
	],
	(request, response) => {
		console.log(request.body);
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}
		response.send('Test Users Route');
	}
);

module.exports = router;
