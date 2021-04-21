import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ProductsBlock from "./ProductsBlock";

const Catalog = (props) => {
	return(
		<div className="catalog">
			<Header/>
			<ProductsBlock id={props.id} />
			<Footer/>
		</div>
	)
}

export default Catalog