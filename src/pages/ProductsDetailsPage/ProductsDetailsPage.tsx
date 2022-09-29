import React, { FunctionComponent } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CircularLoader from '../../components/shared/CircularLoader/CircularLoader';
import { useProduct } from '../../hooks/useProduct';
import { NoImage } from '../../assets/images';

interface ProductsDetailsPageProps {}

const ProductsDetailsPage: FunctionComponent<ProductsDetailsPageProps> = () => {
  const { productId } = useParams();
  const { data, isLoading } = useProduct(productId ?? '');

  return (
    <div className="p-10">
      {isLoading ? (
        <CircularLoader />
      ) : data ? (
        <>
          <Link to={`/products`} className="inline-block mb-4">
            <ArrowBackIcon sx={{ width: 24, height: 24 }} color="primary" />
          </Link>
          <div className="flex items-start">
            <div className="shrink-0 w-2/6 rounded-lg shadow-md overflow-hidden">
              {data?.image ? (
                <img
                  src={data.image}
                  alt="product_img"
                  className="w-full sm:h-40 object-cover h-full"
                />
              ) : (
                <img
                  src={NoImage}
                  alt="product_img"
                  className="w-full sm:h-40 object-cover h-full"
                />
              )}
            </div>
            <div className="flex-1 ml-4">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {data?.name}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Description:</span>{' '}
                {data?.description}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Manufacturer:</span>{' '}
                {data?.manufacturer}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Seller:</span> {data?.seller}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Year:</span> {data?.year}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Color:</span> {data?.color}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-bold">Material:</span>{' '}
                {data?.product_material}
              </p>
              <div className="flex justify-end">
                <span className="text-xl font-bold text-gray-800">
                  ${data?.price}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              to={`/products/${productId}/edit`}
              type="submit"
              className="px-4 py-2 bg-blue-300 text-white rounded-lg shadow-lg border-0"
            >
              Edit
            </Link>
          </div>
        </>
      ) : (
        <Navigate to="/products" />
      )}
    </div>
  );
};

export default ProductsDetailsPage;
