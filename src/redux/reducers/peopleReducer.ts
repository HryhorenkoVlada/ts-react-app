import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPerson } from '../../types/interfaces/person'
import { PeopleState } from '../interfaces/people'

const initialState: PeopleState = {
  loading: false,
  people: [] as IPerson[],
  error: null
}

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    getPeople: (state) => {
      state.loading = true
    },
    getPeopleSuccess: (state, action: PayloadAction<IPerson[]>) => {
      state.loading = false
      state.people = action.payload
    },
    getPeopleError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer } = peopleSlice
export const { getPeople, getPeopleSuccess, getPeopleError } = actions;
export default reducer;
