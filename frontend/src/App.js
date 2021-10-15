import './App.css';

import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/layout/Navbar';
import Landing from '../src/components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
// redux
import { Provider } from 'react-redux';
import store from '../src/store';
import setAuthToken from './utils/setAuthToken';
import { userLoaded } from './actions/auth';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	// put the second parameter [arr of states] to run only once when component did mount
	useEffect(() => {
		store.dispatch(userLoaded());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Alert />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
};

export default App;
