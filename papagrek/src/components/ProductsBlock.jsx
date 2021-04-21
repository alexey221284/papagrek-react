import React from 'react';
import Category from "./Category";
import Products from "./Products";

const ProductsBlock = (props) => {
	return(
		<div className="productsBlock">
			<Category/>
			<Products id={props.id}/>
		</div>
	)
}

export default ProductsBlock;