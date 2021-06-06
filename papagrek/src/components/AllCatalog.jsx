import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CatalogBlock from "./CatalogBlock";


const AllCatalog = () => {
	return (
		<div className="allCatalog">
			<Header/>
			<CatalogBlock/>
			<Footer/>
		</div>
	)
};

export default AllCatalog