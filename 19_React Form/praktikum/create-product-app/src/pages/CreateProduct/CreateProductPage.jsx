import Header from "./Header/Header";
import ProductForm from "./ProductForm/ProductForm";

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
