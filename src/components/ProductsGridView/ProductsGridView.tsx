import React, { FunctionComponent } from 'react';

import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

interface ProductsTableViewProps {}

const ProductsTableView: FunctionComponent<ProductsTableViewProps> = () => {
  const { data, error } = useProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {error ? (
        <div>{error.message}</div>
      ) : (
        data?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default ProductsTableView;
