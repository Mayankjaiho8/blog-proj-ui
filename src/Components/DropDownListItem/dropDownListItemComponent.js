import React from 'react';
import { Link } from 'react-router-dom';
import './dropDownListItem.css';
const DropDownListItem = (props) => {

	const item = props.dropDownListItemContent;

	return(<div className = 'dropDownListItem'>
				<Link to={item.url} >{item.value}</Link>
			</div>
			)
}

export default DropDownListItem;
