import React, { FunctionComponent } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

interface ProductsTableViewProps {}

const ProductsTableView: FunctionComponent<ProductsTableViewProps> = () => {
  const { data, error } = useProducts();
  return (
    <div className="grid grid-cols-4 gap-4">
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
