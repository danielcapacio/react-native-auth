// in charge of updating the state of our app

import { combineReducers } from 'redux';

import { reducer as authReducer } from "../modules/auth"
import { reducer as mainReducer } from "../modules/main"

// Combine all the reducers
const rootReducer = combineReducers({ authReducer, mainReducer });

export default rootReducer;
