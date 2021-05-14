import React from 'react';
import PropTypes from "prop-types";
import "../App.css"
import {NavLink} from "react-router-dom";

class ProductItem extends React.Component {
	render() {
		const {title, price, urlPhoto, description, id} = this.props;
		let path = `/product/${id}`;

		return (
			<NavLink to={path}>
				<div className="ProductItem">
					<img src={urlPhoto} alt="Фото товара"/>
					<h5>{title}</h5>
					<p>{description}</p>
					<h3>Цена {price} руб.</h3>
				</div>
			</NavLink>

		)
	}
}

ProductItem.propTypes = {
	urlPhoto: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number
};

export default ProductItem;