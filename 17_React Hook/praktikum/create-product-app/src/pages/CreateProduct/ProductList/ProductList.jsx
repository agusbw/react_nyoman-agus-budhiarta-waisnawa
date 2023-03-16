export default function ProductList({
  products,
  changeProductsState,
  setupEditForm,
}) {
  const handleDelete = (uuid) => {
    const confirmDelete = confirm("Are you sure to delete product? ");
    if (confirmDelete) {
      const newProducts = products.filter((product) => product.uuid !== uuid);
      changeProductsState(newProducts);
    } else {
      return;
    }
  };

  const handleEdit = (uuid) => {
    setupEditForm(uuid);
  };

  const productsList = products.map((product) => {
    return (
      <tr key={product.uuid}>
        <td>{product.uuid}</td>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.freshness}</td>
        <td>{product.price}</td>
        <td>
          <button
            className="btn btn-danger me-2 btn-sm"
            id="delete"
            type="button"
            onClick={() => handleDelete(product.uuid)}
          >
            Delete
          </button>
          <button
            className="btn btn-success btn-sm"
            id="edit"
            type="button"
            onClick={() => handleEdit(product.uuid)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

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
          <tbody id="tableBody">{productsList}</tbody>
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
