import React from 'react';
import PropTypes from "prop-types";

class CardProduct extends React.Component {
	render() {
		const { title, price } = this.props;
		return(
			<div>
				<h2>
					Наименование: {title}
				</h2>
				<p>
					Цена {price} руб.
				</p>
			</div>
		)
	}
}

CardProduct.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number
};

export default CardProduct