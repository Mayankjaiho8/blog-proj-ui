import React from 'react';
import './rightSectionBlogs.css';

const BlogsRightSection = (props) =>  {

	return(
			<div className = 'blogs-right-section'>
				{props.content}
			</div>
			)
}

export default BlogsRightSection;