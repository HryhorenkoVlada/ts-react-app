import { combineReducers } from '@reduxjs/toolkit'
import peopleReducer from './peopleReducer'

export const rootReducer = combineReducers({
  people: peopleReducer
})