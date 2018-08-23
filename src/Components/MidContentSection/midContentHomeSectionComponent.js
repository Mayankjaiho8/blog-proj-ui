import React, { Component } from 'react';
import { followingBlogs } from './../../static/mockFollowingBlogs.js';
import FollowingBlog from './../FollowingBlog/followingBlogComponent.js'

import './midContentHomeSection.css';

class MidContentHomeSection extends Component{

	constructor(props){
		super();
		this.state = {};
		this.toggleBlogPostContainerHandler = this.toggleBlogPostContainerHandler.bind(this);
	}

	componentDidMount(){
		this.setState({followingBlogs : followingBlogs});
	}

	toggleBlogPostContainerHandler(){
		const { toggleBlogPostContainerHandler } = this.props;

		toggleBlogPostContainerHandler();
	}

	render(){
		const { followingBlogs } = this.state;
		if(followingBlogs){
			var followingBlogsComponentArr  = followingBlogs.map((blog) => <FollowingBlog key={blog.blogid} 
				blogContent = { blog } />);
		}

		return(
			<div className = 'mid-content-section mid-content-home-section'>
				<button id = "createPost" className="btn btn-primary btn-block" 
				onClick = { this.toggleBlogPostContainerHandler }>Create Post</button>
				{ followingBlogs  && followingBlogsComponentArr }
			</div>
			)	
	}
	
}

export default MidContentHomeSection;