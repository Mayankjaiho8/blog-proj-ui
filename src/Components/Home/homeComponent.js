import React, {Component} from 'react';
import {Route } from 'react-router-dom';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js'
import LeftSection from './../LeftSection/leftSectionComponent.js';
import MidContentHomeSection from './../MidContentSection/midContentHomeSectionComponent.js';
import RightSection from './../RightSection/rightSectionComponent.js';
import PrivateBlog from './../PrivateBlog/privateBlogComponent.js';

import { loggedInHeaderNavListItemArr } from './../../static/mockHeaderNavListItems';
import { dropDownListItems } from './../../static/mockLeftSectionDropDownListItems';
import './home.css';

class Home extends Component{
	constructor(props){
		super(props)
		this.HeaderNavArr = loggedInHeaderNavListItemArr;
		this.dropDownListItems = dropDownListItems;
	}

	render(){
		const { isAuthenticated } = this.props.authService;
		const { match } = this.props;
		if(this.props.authService.isAuthenticated()){
			return(
				<div className = 'main-container'>
					<div className = 'home-grid-container'>
						<Header navArr = {this.HeaderNavArr} {...this.props} />
						
						<LeftSection dropDownListItems = {dropDownListItems}/>
						<Route exact path ={`${match.url}`} render ={(props) => <MidContentHomeSection { ...props }/>}/>
						
						<Route path = {`${match.url}/privateblogs`} render ={(props) => <PrivateBlog { ...props } />} />
						
						<RightSection />
						<Footer />
					</div>
				</div>
			)
		}
		else if(!isAuthenticated()){
			return(
			<div>
				You are not logged in. Please <a href = '/' >Log In</a>
			</div>)
		}
		
	}
}

export default Home;