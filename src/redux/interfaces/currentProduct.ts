import { IProduct } from "../../types/proto/product";

export interface CurrentProductState {
  loading: boolean,
  product: IProduct,
  error: null | string
}
