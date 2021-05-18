import React from 'react';
import Category from "./Category";
import ProductsInViewPictures from "./ProductsInViewPictures";

const CatalogBlock = () => {
	return(
		<div className="catalogBlock">
			<Category/>
			<ProductsInViewPictures />
		</div>
	)
}

export default CatalogBlock;