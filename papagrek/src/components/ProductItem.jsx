import React from 'react';
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

export default ProductItem;