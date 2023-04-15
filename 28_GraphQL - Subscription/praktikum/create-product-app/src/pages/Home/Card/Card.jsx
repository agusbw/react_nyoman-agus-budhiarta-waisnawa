import thumbnail from "../../../assets/no-image.png";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="card pb-2">
      <img src={thumbnail} className="card-img-top" alt="img-thumbnail" />
      <div className="card-body position-relative">
        <h5 className="card-title text-dark">{product.name}</h5>
        <p className="card-text text-secondary">Price: {product.price}</p>
        <p className="card-text text-dark">{product.description}</p>
        <div className="mb-5 mt-2">
          <span className="badge bg-success me-1">{product.category}</span>
          <span className="badge bg-primary">{product.freshness}</span>
        </div>
        <a
          href="#"
          className="btn btn-outline-secondary text-dark position-absolute bottom-0 start-0 mx-3"
        >
          Detail View
        </a>
      </div>
    </div>
  );
}
