import React from 'react';
import './content.css';
import LoginForm from './../LoginForm/loginForm.js';

const Content = (props) => {

	return (
		<div className = "content">
			<LoginForm {...props} />
		</div>
		)
}

export default Content;