import { useEffect, useState } from "react";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    productDescription: "",
    productPrice: "",
    productFreshness: "",
  });

  const [formErrors, setFormErrors] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    productDescription: "",
    productPrice: "",
    productFreshness: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });

    if (e.target.name === "productName") {
      if (e.target.value.length > 10) {
        setFormErrors({
          ...formErrors,
          productName: "Product name must be less than 10 characters",
        });
      } else {
        setFormErrors({
          ...formErrors,
          productName: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors({
      ...formErrors,
      productName:
        formData.productName === "" ? "Product name is required" : "",
      productCategory:
        formData.productCategory === "" ? "Product category is required" : "",
      productImage:
        formData.productImage === "" ? "Product image is required" : "",
      productDescription:
        formData.productDescription === ""
          ? "Product description is required"
          : "",
      productPrice:
        formData.productPrice === "" ? "Product price is required" : "",
      productFreshness:
        formData.productFreshness === "" ? "Product freshness is required" : "",
    });

    if (
      formValid &&
      formData.productName !== "" &&
      formData.productCategory !== "" &&
      formData.productImage !== "" &&
      formData.productDescription !== "" &&
      formData.productPrice !== "" &&
      formData.productFreshness !== ""
    ) {
      console.log(formData);
    }
  };

  //effect untuk mengecek apakah form valid atau tidak, jika valid maka tombol submit akan aktif
  useEffect(() => {
    if (
      formErrors.productName === "" &&
      formErrors.productCategory === "" &&
      formErrors.productImage === "" &&
      formErrors.productDescription === "" &&
      formErrors.productPrice === "" &&
      formErrors.productFreshness === ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formErrors]);

  const productCategory = ["Phone", "PC", "Laptop"];
  const productCategoryOptions = productCategory.map((category, key) => (
    <option key={key} value={category}>
      {category}
    </option>
  ));

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
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className={`form-control w-50 ${
                formErrors.productName && "is-invalid"
              }`}
              name="productName"
              id="productName"
              required=""
              value={formData.productName}
              onChange={handleChange}
            />
            <div className="pt-1 text-danger" id="productNameFeedback">
              {formErrors.productName}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              id="productCategory"
              className={`form-select w-25 ${
                formErrors.productCategory && "is-invalid"
              }`}
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
            >
              <option disabled="" value="" defaultValue="">
                Choose
              </option>
              {productCategoryOptions}
            </select>
            <div className="pt-1 text-danger" id="productCategoryFeedback">
              {formErrors.productCategory}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image of Product
            </label>
            <input
              className={`form-control btn btn-outline-primary w-50 d-block ${
                formErrors.productImage && "is-invalid"
              }`}
              type="file"
              id="productImage"
              name="productImage"
              value={formData.productImage}
              onChange={handleChange}
            />
            <div className="pt-1 text-danger" id="productImageFeedback">
              {formErrors.productImage}
            </div>
          </div>
          <div className="mb-3">
            <p className="mb-0">Product Freshness</p>
            <div className="form-check">
              <input
                className={`form-check-input ${
                  formErrors.productFreshness && "is-invalid"
                }`}
                type="radio"
                name="productFreshness"
                value="new"
                checked={formData.productFreshness === "new"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radio1">
                {" "}
                Brand New{" "}
              </label>
            </div>
            <div className="form-check">
              <input
                className={`form-check-input ${
                  formErrors.productFreshness && "is-invalid"
                }`}
                type="radio"
                name="productFreshness"
                value="second"
                checked={formData.productFreshness === "second"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radio2">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className={`form-check-input ${
                  formErrors.productFreshness && "is-invalid"
                }`}
                type="radio"
                name="productFreshness"
                value="refurbished"
                checked={formData.productFreshness === "refurbished"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="radio3">
                Refurbished
              </label>
              <div className="pt-1 text-danger" id="productFreshnessFeedback">
                {formErrors.productFreshness}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Additional Description
            </label>
            <textarea
              className={`form-control ${
                formErrors.productDescription && "is-invalid"
              }`}
              id="productDescription"
              style={{ height: 116 }}
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
            />
            <div className="pt-1 text-danger" id="productDescriptionFeedback">
              {" "}
              {formErrors.productDescription}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className={`form-control ${
                formErrors.productPrice && "is-invalid"
              }`}
              id="productPrice"
              placeholder="$ 1"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
            />
            <div className="pt-1 text-danger" id="productPriceFeedback">
              {formErrors.productPrice}
            </div>
          </div>
          <button
            id="submitBtn"
            type="submit"
            className="btn btn-primary w-75 mx-auto d-block mt-5"
            disabled={!formValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
