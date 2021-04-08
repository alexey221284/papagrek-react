import React from 'react';
import {Router, Route} from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";


const AppRouter = () => {
	return (
		<Router>
			<div>
				<Route exact path="/" component={}/>
				<Route path="/main" component={Main}/>
			</div>
		</Router>
	)
}

export default AppRouter