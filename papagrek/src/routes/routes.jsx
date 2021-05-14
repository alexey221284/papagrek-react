import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from "../components/Main";
import Catalog from "../components/Catalog";
import ItemContainer from "../components/ItemContainer";


const AppRouter = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Main}/>
			<Route path="/catalog" component={Catalog}/>
			<Route path="/products/:categoryId" component={Catalog}/>
			<Route path="/product/:productId" component={ItemContainer}/>
		</BrowserRouter>
	)
}

export default AppRouter