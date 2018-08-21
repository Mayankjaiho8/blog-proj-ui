import React, { Component } from 'react';
import { followingBlogs } from './../../static/mockFollowingBlogs.js';
import FollowingBlog from './../FollowingBlog/followingBlogComponent.js'

import './midContentHomeSection.css';

class MidContentHomeSection extends Component{

	constructor(props){
		super();
		this.state = {};
	}

	componentDidMount(){
		this.setState({followingBlogs : followingBlogs});
	}

	render(){
		const { followingBlogs } = this.state;
		if(followingBlogs){
			var followingBlogsComponentArr  = followingBlogs.map((blog) => <FollowingBlog key={blog.blogid} 
				blogContent = { blog } />);
		}

		return(
			<div className = 'mid-content-section mid-content-home-section'>
				<button id = "createPost" className="btn btn-primary btn-block">Create Post</button>
				{ followingBlogs  && followingBlogsComponentArr }
			</div>
			)	
	}
	
}

export default MidContentHomeSection;