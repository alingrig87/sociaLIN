import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmationPassword: '',
	});

	const { name, email, password, confirmationPassword } = formData;
	const submitHandler = async (e) => {
		e.preventDefault();
		if (password !== confirmationPassword) {
			setAlert('Passwords do not match', 'danger', 3000);
		} else {
			register({ name, email, password });
		}
	};

	return (
		<div className="container">
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<FaUserAlt /> Create your account
			</p>
			<form className="form" onSubmit={(e) => submitHandler(e)}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						// required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						// required
					/>
					<small className="form-text">
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						// minLength="6"
						// autoComplete="on"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="confirmationPassword"
						value={confirmationPassword}
						onChange={(e) =>
							setFormData({ ...formData, confirmationPassword: e.target.value })
						}
						// minLength="6"
						// autoComplete="on"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
