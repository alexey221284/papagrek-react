import React from 'react';
import PropTypes from "prop-types";
import "../App.css"

class CategoryItem extends React.Component {
	render() {
		const { title, id } = this.props;

		return(
			<div className="CategoryItem">
				<h3>{id}. {title}</h3>
			</div>
		)
	}
}

CategoryItem.propTypes = {
	title: PropTypes.string
};

export default CategoryItem