import React, { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCurrentProduct } from '../../redux/actions/currentProduct';

interface ProductsDetailsPageProps {}

const ProductsDetailsPage: FunctionComponent<ProductsDetailsPageProps> = () => {
  const { productId } = useParams();
  console.log(productId);
  const { product } = useAppSelector((state) => state.currentProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      const params = {
        id: productId,
      };
      dispatch(fetchCurrentProduct(params));
    }
  }, []);

  return (
    <div className="flex p-10 items-start">
      <div className="shrink-0 w-2/6 rounded-lg shadow-md overflow-hidden">
        <img src={product.image} alt="product_img" />
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Description:</span> {product.description}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Manufacturer:</span>{' '}
          {product.manufacturer}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Seller:</span> {product.seller}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Year:</span> {product.year}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Color:</span> {product.color}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-bold">Material:</span>{' '}
          {product.product_material}
        </p>
        <div className="flex justify-end">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
