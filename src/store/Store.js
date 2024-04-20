/* eslint-disable prettier/prettier */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux'
// const { default: desertReducer } = require("./Reducers");
import {cakeReducer, icecreamReducer} from './Reducers';

const rootReducers = combineReducers({
    cakeReducer,
    icecreamReducer,
});

const store = configureStore({reducer: rootReducers});
// console.log('Initial state: ',store.getState());
// const unsubscribe = store.subscribe(() => console.log('update state: ', store.getState()));
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// unsubscribe();

export default store;
