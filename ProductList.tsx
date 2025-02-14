import React, { useEffect } from "react";
import { useProductStore } from "../store";

const ProductList: React.FC = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 shadow-md rounded-lg">
          <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
