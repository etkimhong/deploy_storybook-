import React from "react";
import Button from "../atoms/Button";

interface ProductCartProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    onClick: () => void;
    children: React.ReactNode;
  };
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="p-8 rounded-t-lg"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.title}
        </h5>
        <div className="flex items-center justify-between mt-2.5 mb-5">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
