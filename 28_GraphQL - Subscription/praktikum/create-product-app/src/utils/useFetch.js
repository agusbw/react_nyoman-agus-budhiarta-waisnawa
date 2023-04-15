import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products";
export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteProduct = async (id) => {
    setIsLoading(true);
    await axios.delete(`${BASE_URL}/${id}`);
    setIsLoading(false);
  };

  const createProduct = async (product) => {
    setIsLoading(true);
    await axios.post(BASE_URL, product);
    setIsLoading(false);
  };

  const updateProduct = async (id, product) => {
    setIsLoading(true);
    await axios.put(`${BASE_URL}/${id}`, product);
    setIsLoading(false);
  };

  return { deleteProduct, isLoading, createProduct, updateProduct };
}
