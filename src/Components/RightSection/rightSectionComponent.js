import React from 'react';
import './rightSection.css';

import BlogsRightSection from './../RightSectionBlogs/rightSectionBlogsComponent.js';

const RightSection = (props) => {
	const trendingBlogContent= 'Trending blogs will come here';
	const recommendedBlogContent= 'Recommended blogs will come here';

	return(
			<div className = 'right-section'>
			<BlogsRightSection content = {trendingBlogContent}/>
			<BlogsRightSection content = {recommendedBlogContent}/>
			</div>)
}

export default RightSection;