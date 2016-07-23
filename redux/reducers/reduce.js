"use strict"

var userInitialState = {
  test:5
};

export default function(state = userInitialState, action) {
    switch(action.type) {
        
        case 'CHANGE_NUMBER':

           return {
           	...state,
           	test:action.payload.number} 
           
              
        default:
            return state;
            
    }
}

