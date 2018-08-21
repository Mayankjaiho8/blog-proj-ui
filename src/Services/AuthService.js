import auth0 from 'auth0-js';
import history from './history';

class AuthService {

	auth0 = new auth0.WebAuth({
		domain:'mackyblog.auth0.com',
		clientID: 'Jnm95ybE2GwseI2K3WKkWFcgcWuTAxDO',
		redirectUri:'http://localhost:3000/callback',
		
	    responseType: 'token id_token',
	    scope: 'openid'

	})

	login(){
		this.auth0.authorize();
	}

	handleAuthentication(){
		console.log('handling authentication');
		this.auth0.parseHash((err, authResult) => {
			if(authResult && authResult.accessToken && authResult.idToken){
				this.setSession(authResult);
				history.replace('/home')
			}
			else if(err){
				const { errorDescription } = err; 
				history.replace('/',[ errorDescription ]);
			}
		})
	}

	setSession(authResult){
		let expiresAt = JSON.stringify((authResult.expiresIn) + new Date().getTime() + (20 * 60 * 60 * 1000));
		
		localStorage.setItem('id_token',authResult.idToken);
		localStorage.setItem('access_token',authResult.accessToken);
		localStorage.setItem('expires_at',expiresAt);
	}

	logout(){
		localStorage.removeItem('id_token');
		localStorage.removeItem('access_token');
		localStorage.removeItem('expires_at');
	}

	isAuthenticated(){
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		
		return new Date().getTime() < expiresAt;
		//return true;
	}
}

export default AuthService;