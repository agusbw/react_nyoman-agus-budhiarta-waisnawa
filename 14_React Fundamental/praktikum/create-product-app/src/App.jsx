import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Header />
          <ProductForm />
        </div>
        <ProductList />
      </>
    </div>
  );
}

export default App;
