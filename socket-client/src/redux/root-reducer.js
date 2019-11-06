// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// storage represents local storage, sessionStorage represents session storage
import storage from 'redux-persist/lib/storage';
import currentPageReducer from './currentpage/currentpage.reducer';

// key is the entry point fives therom where we start persisting state, root is the 
// bottom level. storage is object that gives method of 
// Only persist the cart reducer since the user reducer is being stored 
// by firebase auth.
const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    page: currentPageReducer
});


export default persistReducer(persistConfig, rootReducer);