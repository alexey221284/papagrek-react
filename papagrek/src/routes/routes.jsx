import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from "../components/Main";
import Catalog from "../components/Catalog";


const AppRouter = () => {
	return (
		<BrowserRouter >
				<Route exact path="/" component={Main}/>
				<Route path="/catalog" component={Catalog} />
				<Route path="/products/1" component={<Catalog />} />
				<Route path="/products/2" component={Catalog} />
		</BrowserRouter >
	)
}

export default AppRouter