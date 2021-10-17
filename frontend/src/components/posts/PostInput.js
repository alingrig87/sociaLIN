import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostInput = ({ addPost }) => {
	const [text, setText] = useState('');
	return (
		<div className="post-form">
			<form
				className="form my-1"
				onSubmit={(e) => {
					e.preventDefault();
					addPost({ text });
					// clear the form
					setText('');
				}}
			>
				<textarea
					className="post-input"
					style={{ borderStyle: 'none' }}
					name="text"
					cols="30"
					rows="3"
					placeholder="Say hello to your friends"
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				></textarea>
				<input type="submit" className="btn btn-primary my-1" value="Post" />
			</form>
		</div>
	);
};

PostInput.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostInput);
