import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';

class ReactiveComp extends Component{

	render(){
		return(
			<ReactiveBase 
			app="car-store"
			credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">

			<div>
				Hello ReactiveSearch
			</div>
			</ReactiveBase>
			)
	}
}

export default ReactiveComp;