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
				<Link to="/posts">
					<BiEditAlt />
					<span className="hide-sm">Posts</span>
				</Link>
			</li>
			<li>
				<Link to="/login">
					<AiOutlineLogin />
					<span className="hide-sm">Log in</span>
				</Link>
			</li>
			<li>
				<Link to="/register">
					<MdOutlineAccountBox />
					<span className="hide-sm">Sign up</span>
				</Link>
			</li>
		</ul>
	);

	const authLinks = (
		<ul>
			<li>
				<Link to="/users">
					<FiSearch /> <span className="hide-sm"> Find new friends</span>
				</Link>
			</li>
			<li>
				<Link to="/posts">
					<BiEditAlt /> <span className="hide-sm">Posts</span>
				</Link>
			</li>
			<li>
				<Link to="/account">
					<MdOutlineAccountCircle /> <span className="hide-sm">My account</span>
				</Link>
			</li>
			<li></li>
			<li>
				<Link to="/" onClick={() => logout()}>
					<AiOutlineLogout />
					<span className="hide-sm">Log out</span>
				</Link>
			</li>
		</ul>
	);

	return (
		<div>
			<nav className="navbar bg-primary">
				<h1 className="logo">
					<Link to="/">
						S<span className="hide-sm">ociaL in</span>
					</Link>
				</h1>
				{isAuthenticated ? (
					<div className="loggedin-user">
						<img className="round-img img-small" src={user && user.avatar} />
						<p className="hide-sm">{user && user.name}</p>
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
