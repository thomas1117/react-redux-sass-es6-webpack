require("!style!css!sass!./style/sass/main.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import {createRoutes} from './components/routes.js';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import store from './redux/store.js';

ReactDOM.render(
	<Provider store={store}>
	<Router 
		routes={createRoutes(store)} 
		history={browserHistory} />
	</Provider>,
	document.getElementById('app'));