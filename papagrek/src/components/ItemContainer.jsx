import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import ItemBlock from "./ItemBlock";

const ItemContainer = () => {
	return (
		<div className="itemContainer">
			<Header/>
			<ItemBlock/>
			<Footer/>
		</div>
	)
};

export default ItemContainer