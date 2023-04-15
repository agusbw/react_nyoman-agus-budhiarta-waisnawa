import { getProductsHomepage } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const { data, error, loading } = useQuery(getProductsHomepage);

  return (
    <div id="products-list" className="py-5">
      <h2 className="px-5 py-2">PRODUCT LIST</h2>
      <div className="row justify-content-around w-100 m-0 gap-5">
        {data &&
          data.products.map((product) => (
            <div className="col-lg-3 col-md-5 col-sm-8" key={product.id}>
              <Card product={product} />
            </div>
          ))}
      </div>
      <div className="col px-5 mt-4 d-flex justify-content-end">
        <Link to="/store" className="btn btn-primary d-block py-2">
          Load more ...
        </Link>
      </div>
    </div>
  );
}
