import React from 'react'
import Breadcrumbs from "./Breadcrumbs";
import Api from "./Api";
import {withRouter} from "react-router-dom";

class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			productUrlPhoto: null,
			productTitle: null,
			productDescription: null,
			productPrice: null
		};
	}

	async componentDidMount() {
		let productId = this.props.match.params.productId;

		try {
			let product = await Api.get(`/product/${productId}`);
			let productData = product.data;
			let productUrlPhoto = productData.urlPhoto;
			let productTitle = productData.title;
			let productDescription = productData.description;
			let productPrice = productData.price;


			this.setState({
				...this.state, ...{
					productTitle,
					productUrlPhoto,
					productDescription,
					productPrice
				}
			});

		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {

		let {productUrlPhoto, productTitle, productDescription, productPrice} = this.state;
		return (
			<div className="componentItem">
				<Breadcrumbs/>
				<div className="imageItem">
					<img src={productUrlPhoto} alt="фото товара"/>
					<p>{productTitle}</p>
					<h3>{productDescription}</h3>
					<h2>Цена {productPrice} руб.</h2>
				</div>
			</div>
		)
	}
}

export let WithURLItemContainerComponent = withRouter(Item);

export default Item