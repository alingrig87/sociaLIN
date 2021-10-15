import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/home" />;
	}
	return (
		<div className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<div className="buttons">
						<Link to="/register" className="btn btn-primary">
							Sign Up
						</Link>
						<Link to="/login" className="btn btn-primary">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
