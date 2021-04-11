import React from 'react';
import CardProduct from "./CardProduct";
import Api from "./Api";

class Products extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: null,
			price: null
		};
	}

	render() {
		const { title, price } = this.state;

		return (
			<CardProduct title={title} price={price}  />
		);
	}

	async componentDidMount() {
		try {
			let userData = await Api.get('/products', {
				params: {
					results: 1,
					inc: 'title, price'
				}
			});

			userData = userData.data[0];

			const title = userData.title;
			const price = userData.price;
			this.setState({
				...this.state, ...{
					title,
					price
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}
}

export default Products