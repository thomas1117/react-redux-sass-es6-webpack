require("!style!css!sass!./style/sass/main.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import {createRoutes} from './components/routes.js';

ReactDOM.render(
	<Router 
	routes={createRoutes()} 
	history={browserHistory} />,
	document.getElementById('app'));