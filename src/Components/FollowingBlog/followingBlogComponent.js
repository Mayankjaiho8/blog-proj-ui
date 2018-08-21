import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './followingBlog.css';

class FollowingBlog extends Component{

	constructor(props){
		super(props);
		this.state = { blogSummaryContent : props.blogContent.content };
		this.blogSummaryContentRef = React.createRef();
		this.blogSummaryContainerRef = React.createRef();

		//this.truncateBlogSummaryContent = this.truncateBlogSummaryContent.bind(this);
	}

	componentDidMount(){
		//this.truncateBlogSummaryContent();
	}

	/*truncateBlogSummaryContent(){
		const content = this.blogSummaryContainerRef.current.children[1].innerHTML;
		let container = this.blogSummaryContainerRef;

		const { scrollHeight } = container.current;
		const { offsetHeight } = container.current;
		
		if(scrollHeight > offsetHeight){
			var contentWordArr = content.split(' ');

			//while(scrollHeight > offsetHeight){
				//contentWordArr.pop();
			//}

			//let newBlogSummaryContent = contentWordArr.join(' ') + '....';

			//this.setState({blogSummaryContent : newBlogSummaryContent})
		}
		let counter = 50;
		while(contentWordArr && counter > 0){
			contentWordArr.pop();
			counter--;
		}
		console.log('scrollHeight ', contentWordArr.join(' )
		//console.log('offsetHeight ', offsetHeight);

	}*/

	render(){
		const { blogSummaryContent }  = this.state;
		const blogHeading = this.props.blogContent.heading;
		const blogId = this.props.blogContent.blogId;

		return(
			<div ref = { this.blogSummaryContainerRef } className="following-blog-container">
				<h4><a href={`/blog/${blogId}`}>{ blogHeading }</a></h4>
				<div ref = {this.blogSummaryContentRef} className='blog-summary-content'>{ blogSummaryContent }</div>
			</div>
		)
	}
	
}


FollowingBlog.propTypes = {
	blogContent : PropTypes.shape({
		heading : PropTypes.string,
		blogid : PropTypes.number,
		bloggerId : PropTypes.number,
		bloggerName : PropTypes.string,
		date : PropTypes.date,
		content: PropTypes.string
	})
}

export default FollowingBlog;

