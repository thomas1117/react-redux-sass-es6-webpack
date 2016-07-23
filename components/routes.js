import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Test from './test.js';

const Home = () => <h1>Hello from dogs!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>

export const createRoutes = store => (
 <Route>
	  <Route path='/' component={Home}/>
	  <Route path='/address' component={Address}/>
	  <Route path='/test' component={Test}/>
  </Route>
);