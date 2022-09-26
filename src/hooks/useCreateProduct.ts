import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { ProductCreateDTO } from "../types/proto/dto/products/create";
import { IProduct } from "../types/proto/product";
import { post } from "../utils/api";

export const useCreateProduct = () => {
  const queryClient = useQueryClient()
  return useMutation((newProduct: ProductCreateDTO) =>
    post(`/products`, JSON.stringify(newProduct))
      .then((res) => res.data.product as IProduct),
    {
      // optimistic updates
      onMutate: async (newProduct: IProduct) => {
        await queryClient.cancelQueries(['products'])
        const previousProducts: IProduct[] | undefined = queryClient.getQueryData(['products'])
        queryClient.setQueryData(['products'], old => [...old as IProduct[], newProduct])
        return { previousProducts }
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['products'])
      },
    }
  );
}
