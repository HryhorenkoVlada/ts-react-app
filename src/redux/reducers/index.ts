import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from './productsReducer'

export const rootReducer = combineReducers({
  products: productsReducer
})