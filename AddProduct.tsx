import React, { useState } from "react";
import axios from "axios";

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/products", product);
    alert("Product added!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-md">
      <input name="name" placeholder="Product Name" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="price" placeholder="Price" onChange={handleChange} className="border p-2 w-full mb-2" />
      <input name="imageUrl" placeholder="Image URL" onChange={handleChange} className="border p-2 w-full mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Product</button>
    </form>
  );
};

export default AddProduct;
