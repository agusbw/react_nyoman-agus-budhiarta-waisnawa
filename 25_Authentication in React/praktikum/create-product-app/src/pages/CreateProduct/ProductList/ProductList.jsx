import { Link } from "react-router-dom";
import { fetcher } from "../../../utils/fetcher";
import useFetch from "../../../utils/useFetch";
import useSWR, { mutate } from "swr";

const url = "https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products";

const TableData = ({ products, handleEdit, handleDelete, isLoading }) => {
  const list = products.map((product) => {
    return (
      <tr key={product.uuid}>
        <td data-testid="product-uuid">{product.uuid}</td>
        <td data-testid="product-name">{product.name}</td>
        <td data-testid="product-category">{product.category}</td>
        <td data-testid="product-freshness">{product.freshness}</td>
        <td data-testid="product-price">{product.price}</td>
        <td>
          <button
            className="btn btn-danger me-2 btn-sm"
            id="delete"
            type="button"
            disabled={isLoading}
            onClick={() => handleDelete(product.uuid)}
          >
            Delete
          </button>
          <button
            className="btn btn-success btn-sm me-2"
            id="edit"
            type="button"
            onClick={() => handleEdit(product.uuid)}
          >
            Edit
          </button>
          <Link to={`/products/${product.uuid}`} state={product}>
            <button className="btn btn-primary btn-sm">Detail</button>
          </Link>
        </td>
      </tr>
    );
  });

  return list;
};

export default function ProductList({ setupEditForm }) {
  const { data: products } = useSWR(url, fetcher);
  const { isLoading, deleteProduct } = useFetch();

  const handleDelete = async (uuid) => {
    const confirmDelete = confirm("Are you sure to delete product? ");
    if (confirmDelete) {
      await deleteProduct(uuid);
      alert("Product deleted!");
      mutate(url);
    }
  };

  const handleEdit = (uuid) => {
    setupEditForm(uuid);
  };

  return (
    <div className="px-5">
      <p className="fs-2 fw-semibold my-3 text-center">List Product</p>
      <div
        className="alert alert-success mx-auto"
        role="alert"
        id="dataAlert"
        style={{ display: "none" }}
      />
      <div className="table-responsive">
        <table className="table w-100 table-striped" id="productForm">
          <thead className="border-top">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {products && (
              <TableData
                products={products}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isLoading={isLoading}
              />
            )}
          </tbody>
        </table>
      </div>
      <div className="mb-1">
        <input
          type="text"
          className="form-control w-25"
          id="searchProduct"
          placeholder="Search Product by Name"
        />
      </div>
      <div className="input-group mb-3">
        <button
          className="btn btn-primary rounded-0"
          id="deletion"
          type="button"
        >
          Deletion
        </button>
        <button
          className="btn btn-outline-primary rounded-0"
          id="search"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
}
