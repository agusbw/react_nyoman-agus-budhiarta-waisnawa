import Header from "./Header/Header";
import Navbar from "../../components/layouts/Navbar/Navbar";
import ProductForm from "./ProductForm/ProductForm";
import ProductList from "./ProductList/ProductList";

export default function CreateProduct() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ProductForm />
      </div>
      <ProductList />
    </>
  );
}
