import React from 'react';
import Api from "./Api";
import Breadcrumbs from "./Breadcrumbs";
import ProductItem from "./ProductItem";

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
			let productsOfCategory = await Api.get(`/category/${this.props.id}`);
			let productsCard = productsOfCategory.data;
			const categoryName = productsOfCategory.title;

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
			<div className="products">
				<Breadcrumbs categoryName={categoryName}/>
				<div className="cardContainer">
					{ productsCardJSX }
				</div>
			</div>
		);
	}
}

export default Products;