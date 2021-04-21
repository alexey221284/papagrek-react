import React from 'react';
import Api from "./Api";
import CategoryItem from "./CategoryItem";

class Category extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryItemsJSX: null
		};
	}

	async componentDidMount() {
		try {
			let allCategory = await Api.get('/category');
			let categoryData = allCategory.data;
			let categoryItemsJSX = categoryData
				.map(item => <CategoryItem title={item.title} key={item.id} id={item.id} />
			);

			this.setState({
				...this.state, ...{
					categoryItemsJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		let {categoryItemsJSX} = this.state;

		return (
			<div className="category">
				<p>Категории товаров:</p>
				{ categoryItemsJSX }
			</div>
		)
	}
}

export default Category