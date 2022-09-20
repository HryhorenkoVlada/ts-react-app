import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/proto/product'
import { ProductsState } from '../interfaces/products'

const initialState: ProductsState = {
  loading: false,
  products: [] as IProduct[],
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true
    },
    getProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.loading = false
      state.products = action.payload
    },
    getProductsError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer } = productsSlice
export const { getProducts, getProductsSuccess, getProductsError } = actions;
export default reducer;
