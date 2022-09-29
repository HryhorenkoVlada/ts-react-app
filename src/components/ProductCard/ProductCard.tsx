import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../types/proto/product';
import { NoImage } from '../../assets/images';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product?.id}`}
      className="rounded-lg shadow-md overflow-hidden"
    >
      <div className="product-card__img-wrapper">
        {product?.image ? (
          <img
            src={product?.image}
            alt="product_img"
            className="w-full sm:h-40 object-cover h-full max-h-56"
          />
        ) : (
          <img
            src={NoImage}
            alt="product_img"
            className="w-full sm:h-40 object-cover h-full max-h-56"
          />
        )}
      </div>
      <div className="p-4 bg-zinc-50">
        <h3 className="font-medium text-2xl text-gray-800">{product?.name}</h3>
        <p className="text-sm text-gray-400">{product?.seller}</p>
        <div className="flex justify-end">
          <span className="font-medium text-lg text-gray-600">
            $ {product?.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
