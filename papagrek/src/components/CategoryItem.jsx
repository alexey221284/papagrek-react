import React from 'react';
import PropTypes from "prop-types";
import "../App.css"

class CategoryItem extends React.Component {
	render() {
		const { title } = this.props;

		return(
			<div className="categoryItem">
				{title}
			</div>
		)
	}
}

CategoryItem.propTypes = {
	title: PropTypes.string
};

export default CategoryItem