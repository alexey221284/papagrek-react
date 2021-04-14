import React from 'react';
import PropTypes from "prop-types";
import "../App.css"

class CardProduct extends React.Component {
	render() {
		const { title, price, urlPhoto } = this.props;
		console.log('urlPhoto ' + urlPhoto);

		return(
			<div className="cardProduct">
				<img src={urlPhoto} alt="здесь должно быть фото товара"/>
				<h3>{title}</h3>
				<h2>Цена {price} руб.</h2>
			</div>
		)
	}
}

CardProduct.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number
};

export default CardProduct