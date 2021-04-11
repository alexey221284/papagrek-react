import React from 'react';
import PropTypes from "prop-types";

class Product extends React.Component {
	render() {
		const { title, price } = this.props;
		return(
			<div>
				<h2>
					{title}
				</h2>
				<p>
					{price}
				</p>
			</div>
		)
	}
}

Product.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number
};

export default Product