export default function ProductForm() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 mt-4">
        <p className="fs-4 fw-semibold">Detail Product</p>
        <form
          action=""
          method="POST"
          className="needs-validation"
          noValidate=""
          id="form"
        >
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control w-50"
              name="product_name"
              id="productName"
              minLength={6}
              maxLength={50}
              required=""
            />
            <div className="pt-1 text-danger" id="productNameFeedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              id="productCategory"
              className="form-select w-25"
              name="product_category"
              required=""
            >
              <option disabled="" value="" defaultValue="">
                Choose
              </option>
              <option value="Phone">Phone</option>
              <option value="PC">PC</option>
              <option value="Laptop">Laptop</option>
            </select>
            <div className="pt-1 text-danger" id="productCategoryFeedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image of Product
            </label>
            <input
              className="form-control btn btn-outline-primary w-50 d-block"
              type="file"
              id="productImage"
              name="product_image"
              required=""
            />
            <div className="pt-1 text-danger" id="productImageFeedback" />
          </div>
          <div className="mb-3">
            <p className="mb-0">Product Freshness</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="product_freshness"
                id="radio1"
                defaultValue="new"
                required=""
              />
              <label className="form-check-label" htmlFor="radio1">
                {" "}
                Brand New{" "}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="product_freshness"
                id="radio2"
                defaultValue="second"
                required=""
              />
              <label className="form-check-label" htmlFor="radio2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="product_freshness"
                id="radio3"
                defaultValue="refurbished"
                required=""
              />
              <label className="form-check-label" htmlFor="radio3">
                Refurbished
              </label>
              <div className="pt-1 text-danger" id="productFreshnessFeedback" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Additional Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              style={{ height: 116 }}
              required=""
              defaultValue={""}
            />
            <div className="pt-1 text-danger" id="productDescriptionFeedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="$ 1"
              required=""
            />
            <div className="pt-1 text-danger" id="productPriceFeedback" />
          </div>
          <button
            id="submitBtn"
            type="submit"
            className="btn btn-primary w-75 mx-auto d-block mt-5"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-custom-class="custom-tooltip"
            data-bs-title="Make sure the data is correct!"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
