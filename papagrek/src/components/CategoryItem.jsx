import React from 'react';
import PropTypes from "prop-types";
import "../App.css"
import {NavLink} from "react-router-dom";

class CategoryItem extends React.Component {
	render() {
		const { title, id } = this.props;
		let path = "/products/" + id;

		return(
			<NavLink className="categoryItem" to={path}>
				{title}
			</NavLink>
		)
	}
}

CategoryItem.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string
};

export default CategoryItem