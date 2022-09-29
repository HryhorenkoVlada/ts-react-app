import { useQuery } from "@tanstack/react-query";

import { IProduct } from "../types/proto/product";
import { get } from "../utils/api";

export const useProducts = () => {
  return useQuery<IProduct[], Error>(["products"], () =>
    get("/products")
      .then((res) => res.data.products),
  );
}