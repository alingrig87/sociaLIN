import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div class="landing">
			<div class="dark-overlay">
				<div class="landing-inner">
					<div class="buttons">
						<Link to="/register" class="btn btn-dark">
							Sign Up
						</Link>
						<Link to="/login" class="btn btn-light">
							Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
