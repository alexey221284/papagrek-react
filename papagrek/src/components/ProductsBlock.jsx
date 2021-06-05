import React from 'react';
import Category from "./Category";
import {WithURLProductsContainerComponent} from "./Products";

const ProductsBlock = () => {
	return (
		<div className="productsBlock">
			<Category/>
			<WithURLProductsContainerComponent/>
		</div>
	)
};

export default ProductsBlock;