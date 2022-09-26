import React, { FunctionComponent } from 'react';
import { IProduct } from '../../types/proto/product';
import { NoImage } from '../../assets/images';
import { Link } from 'react-router-dom';

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
          <img src={product?.image} alt="product_img" />
        ) : (
          <img src={NoImage} alt="product_img" />
        )}
      </div>
      <div className="p-4">
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
