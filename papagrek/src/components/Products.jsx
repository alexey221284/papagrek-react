import React from 'react';
import Product from "./Product";
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
			<Product title={title} price={price}  />
		);
	}

	async componentDidMount() {
		try {
			let userData = await Api.get('/products/1', {
				params: {
					results: 1,
					inc: 'title, price'
				}
			});

			userData = userData.data;

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
// ...

}

	// axios
	// 	.get("https://my-json-server.typicode.com/alexey221284/papagrek-react/products/2")
	// 	.then(response => {
	// 		return response.data
	// 	});


export default Products