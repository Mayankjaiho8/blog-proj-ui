import React, { Component } from 'react';
import { CategorySearch } from '@appbaseio/reactivesearch';

export default class ComponentSearchWrapper extends Component{

render(){

	return(
		<CategorySearch 
			componentId = "searchbox"
			dataField = "name"
			categoryField = "brand.raw"
			placeholder="Search for cars"
		/>
		)
}
	
}
