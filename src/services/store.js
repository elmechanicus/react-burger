import { configureStore } from "@reduxjs/toolkit";
import constructorReducer from './reducers/constructor';
import ingredientsReducer from './reducers/ingredients';
import orderReducer from './reducers/order';
import cardReducer from './reducers/card';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    constructor: constructorReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    card: cardReducer
  }
}, enhancer)

export default store;