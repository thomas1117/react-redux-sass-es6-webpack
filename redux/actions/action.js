"use strict";

import store from '../store';

export function doThis(resp) {
		store.dispatch({
		type: 'CHANGE_NUMBER',
		payload: resp,
		})
	}