import { IProduct } from "../../types/proto/product";

export interface ProductsState {
  loading: boolean,
  products: IProduct[],
  error: null | string
}
