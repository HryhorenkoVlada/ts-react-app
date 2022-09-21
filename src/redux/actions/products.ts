import { AnyAction, ThunkAction } from "@reduxjs/toolkit"

import { getProducts, getProductsSuccess, getProductsError } from "../reducers/productsReducer"
import { RootState } from "../store"
import { get } from '../../utils/api'
import { ProductsIndexRO } from "../../types/proto/ro/products"


export const fetchProducts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(getProducts())
      const response = await get('/products')
      const data: ProductsIndexRO = response.data
      console.log(data.products)
      dispatch(getProductsSuccess(data.products))
    }
    catch (e) {
      dispatch(getProductsError('Error occurred while fetching products'))
    }
  }
}