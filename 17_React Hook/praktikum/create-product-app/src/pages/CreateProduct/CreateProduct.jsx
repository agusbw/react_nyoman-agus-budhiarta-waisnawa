import Header from "./Header/Header";
import Navbar from "../../components/layouts/Navbar/Navbar";
import ProductForm from "./ProductForm/ProductForm";
import { useEffect } from "react";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome!");
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ProductForm />
      </div>
    </>
  );
}
