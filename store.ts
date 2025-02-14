import { create } from "zustand";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    const { data } = await axios.get("http://localhost:8080/products");
    set({ products: data });
  },
}));
