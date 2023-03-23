export default function ProductList() {
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
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="tableBody" />
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
