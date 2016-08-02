import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Test from './test.js';

const Home = () => <h1>I'm at the home page go to <Link to={"/address"}>address page</Link></h1>
const Address = () => <h1>I'm on the address page test</h1>

export const createRoutes = store => (
 <Route>
	  <Route path='/' component={Home}/>
	  <Route path='/address' component={Address}/>
	  <Route path='/test' component={Test}/>
  </Route>
);