import React, { FunctionComponent, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchProducts } from '../../redux/actions/products';

interface ProductsPageProps {}

const ProductsPage: FunctionComponent<ProductsPageProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div>Products page</div>;
};

export default ProductsPage;
