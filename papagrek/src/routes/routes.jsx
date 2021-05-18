import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from "../components/Main";
import AllCatalog from "../components/AllCatalog";
import CurrentCatalog from "../components/CurrentCatalog";
import ItemContainer from "../components/ItemContainer";


const AppRouter = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Main}/>
			<Route path="/catalog" component={AllCatalog}/>
			<Route path="/products/:categoryId" component={CurrentCatalog}/>
			<Route path="/product/:productId" component={ItemContainer}/>
		</BrowserRouter>
	)
}

export default AppRouter