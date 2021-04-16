import React from 'react';
import PropTypes from "prop-types";

class Breadcrumbs extends React.Component {
	render() {
		const { categoryName } = this.props;
		return(
			<div>
				<h2>Категории / {categoryName}</h2>
			</div>
		)
	}
}

Breadcrumbs.propTypes = {
	categoryName: PropTypes.string
};

export default Breadcrumbs