import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/proto/product'
import { CurrentProductState } from '../interfaces/currentProduct'

const initialState: CurrentProductState = {
  loading: false,
  product: {} as IProduct,
  error: null
}

const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    getCurrentProduct: (state) => {
      state.loading = true
    },
    getCurrentProductSuccess: (state, action: PayloadAction<IProduct>) => {
      state.loading = false
      state.product = action.payload
    },
    getCurrentProductError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer } = currentProductSlice
export const { getCurrentProduct, getCurrentProductSuccess, getCurrentProductError } = actions;
export default reducer;