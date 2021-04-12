import React from 'react';
import CardProduct from "./CardProduct";
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

	render() {
		const { categoryName, title, price, urlPhoto } = this.state;

		return (
			<div>
				<Breadcrumbs categoryName={categoryName} />
				<div className="cardContainer">
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
					<CardProduct  title={title} price={price} urlPhoto={urlPhoto}  />
				</div>

			</div>

		);
	}

	async componentDidMount() {
		try {
			let userData = await Api.get('/category/1', {
				params: {
					results: 1,
					inc: 'title, price'
				}
			});

			userData = userData.data;
			console.log(userData)

			const categoryName = userData.title;
			const title = userData.products[0].title;
			const price = userData.products[0].price;
			const urlPhoto = userData.products[0].urlPhoto;

			console.log(title)
			this.setState({
				...this.state, ...{
					categoryName,
					title,
					price,
					urlPhoto
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}
}

export default Products