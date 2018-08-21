import React from 'react';
import DropDownListItem from './../DropDownListItem/dropDownListItemComponent.js';
import './leftSection.css';

const LeftSection = (props) => {

	const dropDownListArr = props.dropDownListItems.map((dropDownItem) => 
		<DropDownListItem key={dropDownItem.value} dropDownListItemContent = {dropDownItem}/>
	)

	return (
		<div className = 'left-section'>
			{ dropDownListArr }
		</div>
		)
}

export default LeftSection;