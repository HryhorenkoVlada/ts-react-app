import React, { FunctionComponent } from 'react';
import { useAppSelector } from '../../hooks/redux';
import ProductCard from '../ProductCard/ProductCard';

interface ProductsListViewProps {}

const ProductsListView: FunctionComponent<ProductsListViewProps> = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <div className="grid grid-cols-4 gap-4">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsListView;
