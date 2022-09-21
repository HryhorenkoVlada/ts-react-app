import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from './productsReducer'
import currentProductReducer from './currentProductReducer'

export const rootReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer
})