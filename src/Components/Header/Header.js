import React,{ Component } from 'react';
import HeaderNav from './../HeaderNav/headerNav.js';
import './header.css'

class Header extends Component {

	shouldComponentUpdate(nextProps, nextState){
		return true; 
	}

	render(){
		const { navArr } = this.props;
		return (
			<div className = "header">
				<HeaderNav {...this.props} navArr = {navArr} />
			</div>
		)	
	}
	
}

export default Header;