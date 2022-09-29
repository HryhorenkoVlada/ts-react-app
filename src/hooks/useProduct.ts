import { useQuery, useQueryClient } from "@tanstack/react-query";

import { IProduct } from "../types/proto/product";
import { get } from "../utils/api";

export const useProduct = (productId: string) => {
  const queryClient = useQueryClient()
  return useQuery<IProduct, Error>(["products", productId], () =>
    get(`/products/${productId}`)
      .then((res) => res.data.product),
    {
      initialData: (): IProduct | undefined => {
        return (queryClient.getQueryData(['products']) as IProduct[] | undefined)?.find((product: IProduct) => product.id === productId)
      },
      enabled: !!productId,
    }
  );
}
