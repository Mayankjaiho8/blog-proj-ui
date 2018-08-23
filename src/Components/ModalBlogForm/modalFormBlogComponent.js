import React,{ Component } from 'react';
import PostService from './../../Services/PostService.js';
import './modalFormBlog.css';

class ModalFormBlog extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
		this.postService = new PostService(); 
		this.toggleModalHandler = this.toggleModalHandler.bind(this);
		this.postHandler = this.postHandler.bind(this);
	}

	toggleModalHandler(){

		const { toggleBlogPostContainerHandler }= this.props;
		toggleBlogPostContainerHandler();
	}

	postHandler(){
		
	}

	render(){

		return(
			<div id="modal-container">
				<div id="modal-header">
					<h1>Enter Blog</h1>
					<button  className="btn-close" onClick = {this.toggleModalHandler}>&times;</button>
				</div>
				<div id="modal-content-section">
					<form name="blogForm">
						<div>
							<label>Subject : </label>
							<input type="text" name="formSubject" placeholder = "Subject ...." />
						</div>
						
						<textarea placeholder = "Enter your blog Post here"></textarea>
						<button className="btn-primary">Post</button>
					</form>
				</div>
				<div id="modal-footer"></div>
			</div>
			
			)
	}
}

export default ModalFormBlog;