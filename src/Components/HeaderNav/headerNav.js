import React from 'react';
import './headerNav.css';

const logout = (authService, navItem) => {
	authService.logout();
}

const HeaderNav = (props) => {
	const { navArr, authService } = props;
	const navItemArr = navArr.map((navItem) => <a id = {navItem.id} href="#" key = {navItem.id}>{ navItem.text }</a>);
	let signOutBtn = document.getElementById('signOut');
	if(signOutBtn){
			signOutBtn.onclick = function(){
			authService.logout();
		}
	}	
	
	

	return (
			<div className="navbar">
				{ navItemArr }
			</div>
		)
}

export default HeaderNav;