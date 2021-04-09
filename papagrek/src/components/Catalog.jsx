import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ProductsBlock from "./ProductsBlock";

const Catalog = () => {
	return(
		<div className="catalog">
			<Header/>
			<ProductsBlock/>
			<Footer/>
		</div>

	)
}

export default Catalog