import Header from "./Header/Header";
import ProductForm from "./ProductForm/ProductForm";
import { useEffect } from "react";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome!");
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <ProductForm />
      </div>
    </>
  );
}
