import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';

import App from './App.js';
import Home from './Components/Home/homeComponent.js';
import Callback from './Components/Callback/callbackComponent';

import AuthService from './Services/AuthService.js';
import history from './Services/history';

class Layout extends Component {

	constructor(){
		super();
		this.authService = new AuthService();	
	}
	

	handleAuthentication(nextState, replace){
		if(/access_token|id_token|error/.test(nextState.location.hash)){
			this.authService.handleAuthentication();
		}
	}

	render(){

		const authService = this.authService;

		return(
			<Router history={history}>
				<div>
					<Route path = '/home' render={(props) => <Home {...props} authService={authService} />} />
					<Route path = '/callback' render ={(props) => {
						this.handleAuthentication(props);
						return <Callback {...props}/>
					}} />
					<Route exact authService={authService} path ='/' render={(props) => <App {...props} authService={authService} />} />
				</div>
			</Router>
			)
	}
}

export default Layout;