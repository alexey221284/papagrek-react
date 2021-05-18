import React from 'react';
import PropTypes from "prop-types";
import "../App.css"
import {NavLink} from "react-router-dom";

class CategoryInViewPicturesItem extends React.Component {
	render() {
		const { title, id, urlCategoryPhoto} = this.props;
		let path = "/products/" + id;

		return(
			<div className="categoryInViewPicturesItem">
				<NavLink to={path}>
					<img src={urlCategoryPhoto} alt="photo"/>
					<span>{title}</span>
				</NavLink>

			</div>

		)
	}
}

CategoryInViewPicturesItem.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string
};

export default CategoryInViewPicturesItem