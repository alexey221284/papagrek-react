import React from 'react';
import PropTypes from "prop-types";
import "../App.css"

class ProductItem extends React.Component {
	render() {
		const { title, price, urlPhoto, description } = this.props;

		return(
			<div className="ProductItem">
				<img src={urlPhoto} alt="Фото товара" />
				<h2>{title}</h2>
				<p>{description}</p>
				<h2>Цена {price} руб.</h2>
			</div>
		)
	}
}

ProductItem.propTypes = {
	urlPhoto: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number
};

export default ProductItem