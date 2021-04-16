import React from 'react';
import ProductItem from "./ProductItem";
import Api from "./Api";
import Breadcrumbs from "./Breadcrumbs";

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
		try {
			let allProductsFirstCategory = await Api.get('/category/2');
			let productsCard = allProductsFirstCategory.data.products;

			const categoryName = allProductsFirstCategory.data.title;

			let productsCardJSX = productsCard
				.map(card =>
					<ProductItem title={card.title}
								 price={card.price}
								 urlPhoto={card.urlPhoto}
								 description={card.description}/>
				);

			this.setState({
				...this.state, ...{
					categoryName,
					productsCardJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		let {categoryName, productsCardJSX} = this.state;

		return (
			<div>
				<Breadcrumbs categoryName={categoryName}/>
				<div className="cardContainer">
					{ productsCardJSX }
				</div>
			</div>
		);
	}
}

export default Products