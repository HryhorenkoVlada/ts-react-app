import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { IProduct } from "../types/proto/product";
import { put } from "../utils/api";

export const useEditProduct = () => {
  const queryClient = useQueryClient()
  return useMutation((updatedProduct: IProduct) =>
    put(`/products/${updatedProduct.id}`, JSON.stringify(updatedProduct))
      .then((res) => res.data.product as IProduct),
    {
      // optimistic updates
      // onMutate: async updatedProduct => {
      //   await queryClient.cancelQueries(['products', updatedProduct.id])
      //   const previousProduct: IProduct | undefined = queryClient.getQueryData(['products', updatedProduct.id])
      //   queryClient.setQueryData(['products', updatedProduct.id], updatedProduct)
      //   return { previousProduct, updatedProduct }
      // },
      onSuccess: (product) => {
        queryClient.invalidateQueries(['products', product?.id])
      },
      onError: (err, updatedProduct, context: any) => {
        queryClient.setQueryData(
          ['products', context?.updatedProduct.id],
          context?.previousProduct
        )
      },
    }
  );
}