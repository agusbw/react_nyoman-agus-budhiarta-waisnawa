import { useLocation, Link, Navigate } from "react-router-dom";
import imgThumbnail from "../../assets/img-thumbnail.png";

const ProductDetail = () => {
  const product = useLocation().state;

  if (!product) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="w-100">
      <div className="w-25 mx-auto mt-5 text-center">
        <h1>Product Detail</h1>
        <img src={imgThumbnail} alt="" />
        <div className="text-start mt-3">
          <p>Name: {product.name}</p>
          <p>Category: {product.category}</p>
          <p>Freshness: {product.freshness}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <Link to="/products">Back to Products Page</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
