import React from 'react';
import PropTypes from "prop-types";

class Breadcrumbs extends React.Component {
	render() {
		const { categoryName } = this.props;
		return(
			<div>
				<h1>Категория: {categoryName}</h1>
			</div>
		)
	}
}

Breadcrumbs.propTypes = {
	categoryName: PropTypes.string
};

export default Breadcrumbs