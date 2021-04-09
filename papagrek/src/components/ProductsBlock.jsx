import React from 'react';
import Category from "./Category";
import Products from "./Products";

const ProductsBlock = () => {
	return(
		<div className="productsBlock">
			<Category/>
			<Products/>
		</div>

	)
}

export default ProductsBlock