import React from 'react';
import { AiFillHome, AiOutlineLogin } from 'react-icons/ai';
import { MdOutlineAccountBox } from 'react-icons/md';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar bg-dark">
				<h1>
					<a href="index.html">social IN</a>
				</h1>
				<ul>
					<li>
						<a href="home.html">
							<AiFillHome /> Home
						</a>
					</li>
					<li>
						<a href="login.html">
							<AiOutlineLogin /> Log in
						</a>
					</li>
					<li>
						<a href="register.html">
							<MdOutlineAccountBox />
							Sign up
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
