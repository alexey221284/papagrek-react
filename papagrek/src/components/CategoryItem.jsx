import React from 'react';
import "../App.css"
import {NavLink} from "react-router-dom";

class CategoryItem extends React.Component {
	render() {
		const {title, id} = this.props;
		let path = "/products/" + id;

		return (
			<NavLink className="categoryItem" to={path}>
				{title}
			</NavLink>
		)
	}
}

export default CategoryItem