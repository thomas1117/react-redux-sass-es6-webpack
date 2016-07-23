"use strict";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Add middleware to createStore
var createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import reduce from './reducers/reduce.js';


// Combine Reducers
var reducers = combineReducers({
    reduce:reduce
});

// Create Store
var store = createStoreWithMiddleware(reducers);

export default store;