const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @route         POST api/posts
// @description   Create a post
// @access        Private - only logged in user could add a new post
router.post(
	'/',
	[auth, [check('text', 'Post content is required').not().isEmpty()]],
	async (request, response) => {
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(request.user.id).select('-password');
			const newPost = new Post({
				text: request.body.text,
				name: user.name,
				avatar: user.avatar,
				user: request.user.id,
			});

			const post = await newPost.save();
			response.json(post);
		} catch (error) {
			console.error(error.message);
			response.status(500).send('');
		}
	}
);

// @route         GET api/posts
// @description   Fetch all posts
// @access        Private - only logged in users can see all posts from all users
router.get('/', auth, async (request, response) => {
	// sort the post desceding by added date
	try {
		const posts = await Post.find().sort({ date: -1 });
		response.json(posts);
	} catch (error) {
		console.error(error.message);
		response.status(500).send('Server error');
	}
});

// @route         GET api/posts/:id
// @description   Get post by id
// @access        Private - only logged in users can see all posts from all users
router.get('/:post_id', auth, async (request, response) => {
	// sort the post desceding by added date
	try {
		const post = await Post.findById(request.params.post_id);

		if (!post) {
			return response.status(404).json({ msg: 'Post not found' });
		}

		response.json(post);
	} catch (error) {
		console.error(error.message);
		// check if the id is in correct format
		if (error.kind == 'ObjectId') {
			return response.status(404).json({ msg: 'Post not found' });
		}
		response.status(500).send('Server error');
	}
});

// @route         DELETE api/posts/:id
// @description   Delete post by id
// @access        Private - only logged in users can see all posts from all users
router.delete('/:post_id', auth, async (request, response) => {
	// sort the post desceding by added date
	try {
		const post = await Post.findById(request.params.post_id);

		// check if the user that delete the post is the owner
		// post.user is not of type string, but ObjectId
		if (post.user.toString() !== request.user.id) {
			return response
				.status(401)
				.json({ msg: 'User not authorized to delete the post' });
		}

		await post.remove();

		response.json({ msg: 'Post removed' });
	} catch (error) {
		console.error(error.message);
		// check if the id is in correct format
		if (error.kind == 'ObjectId') {
			return response.status(404).json({ msg: 'Post not found' });
		}
		response.status(500).send('Server error');
	}
});
module.exports = router;