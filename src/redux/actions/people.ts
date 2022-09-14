import { getPeople, getPeopleSuccess, getPeopleError } from "../reducers/peopleReducer"
import { RootState } from "../store"
import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { api } from '../../utils/api'
import { PeopleIndexDTO } from "../../types/proto/dto/people"
import { PeopleIndexRO } from "../../types/proto/ro/people"


export const fetchPeople = (params: PeopleIndexDTO): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(getPeople())
      const response = await api.get(`/people`, { params })
      const { data }: { data: PeopleIndexRO } = response
      dispatch(getPeopleSuccess(data.results))
    }
    catch (e) {
      dispatch(getPeopleError('Error occurred while fetching users'))
    }
  }
}