import { AnyAction, ThunkAction } from "@reduxjs/toolkit"

import { CurrentProductIndexRO } from "../../types/proto/ro/currentProduct"
import { getCurrentProduct, getCurrentProductError, getCurrentProductSuccess } from "../reducers/currentProductReducer"
import { get } from '../../utils/api'
import { CurrentProductIndexDTO } from "../../types/proto/dto/currentProduct"
import { RootState } from "../store"

export const fetchCurrentProduct = (params: CurrentProductIndexDTO): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(getCurrentProduct())
      const response: CurrentProductIndexRO = await get(`/products/${params.id}`)
      const { product } = response.data
      dispatch(getCurrentProductSuccess(product))
    } catch (e) {
      dispatch(getCurrentProductError('Error occured while fetching product'))
    }
  }
}