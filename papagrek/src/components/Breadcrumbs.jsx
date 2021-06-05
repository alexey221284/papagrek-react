import React from 'react';
import Api from "./Api";

class Breadcrumbs extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentCategoryName: null
		};
	}

	async componentDidUpdate() {
		try {
			let allCategory = await Api.get("/categories");
			let categoryData = allCategory.data;
			let currentCategoryIdNumber = this.props.categoryId;
			const currentCategoryName = categoryData[currentCategoryIdNumber - 1].title;

			this.setState({
				...this.state, ...{
					currentCategoryName
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		let {currentCategoryName} = this.state;
		return (
			<div>
				<h2>Категории / {currentCategoryName} </h2>
			</div>
		)
	}
}

export default Breadcrumbs;