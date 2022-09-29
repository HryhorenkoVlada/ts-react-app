import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { ProductCreateDTO } from "../types/proto/dto/products/create";
import { IProduct } from "../types/proto/product";
import { post } from "../utils/api";

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation((newProduct: ProductCreateDTO) =>
    post(`/products`, JSON.stringify(newProduct))
      .then((res) => { console.log(res.data.product); return res.data.product as IProduct }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products'])
      },
    }
  );
}
