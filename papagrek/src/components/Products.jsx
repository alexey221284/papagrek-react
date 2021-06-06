import React from 'react';
import Api from "./Api";
import Breadcrumbs from "./Breadcrumbs";
import ProductItem from "./ProductItem";
import {withRouter} from "react-router-dom";

class Products extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryName: null,
			title: null,
			price: null,
			urlPhoto: null
		};
	}

	async componentDidMount() {
		console.log('componentDidMount');
		try {
			let categoryId = this.props.match.params.categoryId;
			let productsOfCategory = await Api.get(`/category/${categoryId}`);
			let productsCard = productsOfCategory.data;

			let productsCardJSX = productsCard
				.map(card =>
					<ProductItem title={card.title}
								 price={card.price}
								 urlPhoto={card.urlPhoto}
								 description={card.description}
								 key={card.id}
					/>
				);

			this.setState({
				...this.state, ...{
					categoryId,
					productsCardJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	async componentDidUpdate() {
		console.log('componentDidUpdate');
		try {
			let categoryId = this.props.match.params.categoryId;
			let productsOfCategory = await Api.get(`/category/${categoryId}`);
			let productsCard = productsOfCategory.data;


			let productsCardJSX = productsCard
				.map(card =>
					<ProductItem title={card.title}
								 price={card.price}
								 urlPhoto={card.urlPhoto}
								 description={card.description}
								 key={card.id}
								 id={card.id}
					/>
				);

			this.setState({
				...this.state, ...{
					categoryId,
					productsCardJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		console.log('render');
		let {categoryId, productsCardJSX} = this.state;
		return (
			<div className="products">
				<Breadcrumbs categoryId={categoryId}/>
				<div className="cardContainer">
					{productsCardJSX}
				</div>
			</div>
		);
	}
}

export let WithURLProductsContainerComponent = withRouter(Products);