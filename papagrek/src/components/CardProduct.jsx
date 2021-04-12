import React from 'react';
import PropTypes from "prop-types";
import "../App.css"
//import srcPhoto from "../img/products/1/2.jpg";

class CardProduct extends React.Component {
	render() {
		const { title, price, urlPhoto } = this.props;
		let srcPhoto = urlPhoto;
		console.log('urlPhoto ' + urlPhoto)
		console.log('srcPhoto ' + srcPhoto)

		return(
			<div className="cardProduct">
				<img src={srcPhoto} alt="здесь должно быть фото товара"/>
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