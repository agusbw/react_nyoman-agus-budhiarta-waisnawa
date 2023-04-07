import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products";
export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteProduct = async (id) => {
    setIsLoading(true);
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    setIsLoading(false);
  };

  const createProduct = async (product) => {
    setIsLoading(true);
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setIsLoading(false);
  };

  const updateProduct = async (id, product) => {
    setIsLoading(true);
    await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    setIsLoading(false);
  };

  return { deleteProduct, isLoading, createProduct, updateProduct };
}
