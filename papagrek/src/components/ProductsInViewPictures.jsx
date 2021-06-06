import React from 'react';
import Api from "./Api";
import CategoryInViewPicturesItem from "./CategoryInViewPicturesItem";
import Breadcrumbs from "./Breadcrumbs";

class ProductsInViewPictures extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			CategoryInViewPicturesItemJSX: null
		};
	}

	async componentDidMount() {
		try {
			let allCategory = await Api.get("/categories");
			let categoryData = allCategory.data;
			let CategoryInViewPicturesItemJSX = categoryData
				.map(item => <CategoryInViewPicturesItem title={item.title} key={item.id} id={item.id}
														 urlCategoryPhoto={item.urlCategoryPhoto}/>
				);

			this.setState({
				...this.state, ...{
					CategoryInViewPicturesItemJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		let {CategoryInViewPicturesItemJSX} = this.state;

		return (
			<div className="products">
				<Breadcrumbs/>
				<div className="categoryInViewPicture">
					{CategoryInViewPicturesItemJSX}
				</div>
			</div>
		)
	}
}

export default ProductsInViewPictures