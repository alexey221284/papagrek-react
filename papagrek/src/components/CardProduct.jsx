import React from 'react';
import PropTypes from "prop-types";
import "../App.css"

class CardProduct extends React.Component {
	render() {
		const { title, price, urlPhoto } = this.props;
		return(
			<div className="cardProduct">
				<img src={urlPhoto} alt="здесь должно быть фото товара"/>
				<h2>{title}</h2>
				<p>Цена {price} руб.</p>
			</div>
		)
	}
}

CardProduct.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number
};

export default CardProduct