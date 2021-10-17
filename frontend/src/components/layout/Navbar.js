import React from 'react';
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAccountBox, MdOutlineAccountCircle } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Spinner from './Spinner';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	if (loading) {
		return <Spinner />;
	}
	const vistorLinks = (
		<ul>
			<li>
				<Link to="/users">
					<FiSearch /> Find new friends
				</Link>
			</li>
			<li>
				<Link to="/login">
					<AiOutlineLogin /> Log in
				</Link>
			</li>
			<li>
				<Link to="/register">
					<MdOutlineAccountBox />
					Sign up
				</Link>
			</li>
		</ul>
	);

	const authLinks = (
		<ul>
			<li>
				<Link to="/users">
					<FiSearch /> Find new friends
				</Link>
			</li>
			<li>
				<Link to="/posts">
					<BiEditAlt /> Posts
				</Link>
			</li>
			<li>
				<Link to="/account">
					<MdOutlineAccountCircle /> My account
				</Link>
			</li>
			<li></li>
			<li>
				<Link to="/" onClick={() => logout()}>
					<AiOutlineLogout /> Log out
				</Link>
			</li>
		</ul>
	);

	return (
		<div>
			<nav className="navbar bg-primary">
				<h1 className="logo">
					<Link to="/">SociaL in</Link>
				</h1>
				{isAuthenticated ? (
					<div className="loggedin-user">
						<img className="round-img img-small" src={user && user.avatar} />
						<p>{user && user.name}</p>
					</div>
				) : (
					''
				)}
				{isAuthenticated ? authLinks : vistorLinks}
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
