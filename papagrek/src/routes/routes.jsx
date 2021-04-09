import React from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Main from "../components/Main";
import Catalog from "../components/Catalog";


const AppRouter = () => {
	return (
		<BrowserRouter >
				<Route exact path="/" component={Main}/>
				<Route path="/catalog" component={Catalog}/>
		</BrowserRouter >
	)
}

export default AppRouter