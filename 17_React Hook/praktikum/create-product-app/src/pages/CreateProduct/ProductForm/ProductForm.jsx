import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";

const dummy = [];

export default function ProductForm() {
  const emptyForm = {
    name: "",
    category: "",
    image: "default.jpg",
    description: "",
    price: "",
    freshness: "",
  };

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "default.jpg",
    description: "",
    price: "",
    freshness: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
    freshness: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [products, setProducts] = useState(dummy);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });

    if (e.target.name === "name") {
      if (e.target.value.length > 10) {
        setFormErrors({
          ...formErrors,
          name: "Product name must be less than 10 characters",
        });
      } else {
        setFormErrors({
          ...formErrors,
          name: "",
        });
      }
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setFormErrors({
      ...formErrors,
      name: formData.name === "" ? "Product name is required" : "",
      category: formData.category === "" ? "Product category is required" : "",
      image: formData.image === "" ? "Product image is required" : "",
      description:
        formData.description === "" ? "Product description is required" : "",
      price: formData.price === "" ? "Product price is required" : "",
      freshness:
        formData.freshness === "" ? "Product freshness is required" : "",
    });

    if (
      formValid &&
      formData.name !== "" &&
      formData.category !== "" &&
      formData.image !== "" &&
      formData.description !== "" &&
      formData.price !== "" &&
      formData.freshness !== ""
    ) {
      if (isEdit) {
        const newProducts = products.map((product) => {
          if (product.uuid === formData.uuid) {
            return formData;
          } else {
            return product;
          }
        });
        setProducts(newProducts);
        setFormData(emptyForm);
        setIsEdit(false);
        alert("Product edited!");
      } else {
        setProducts((prev) => {
          return [
            ...prev,
            {
              ...formData,
              uuid: uuidv4(),
            },
          ];
        });
        setFormData(emptyForm);
        alert("Product added!");
      }
    }
  };

  const handleReset = () => {
    setIsEdit(false);
    setFormData({
      ...emptyForm,
    });
    setFormErrors({
      ...emptyForm,
      image: "",
    });
  };

  const changeProductsState = (newProductsState) => {
    setProducts(newProductsState);
  };

  const setupEditForm = (uuid) => {
    setFormErrors({
      ...emptyForm,
      image: "",
    });
    const editedProduct = products.find((product) => product.uuid === uuid);
    editedProduct ? setIsEdit(true) : setIsEdit(false);
    setFormData(editedProduct);
  };

  //effect untuk mengecek apakah form valid atau tidak, jika valid maka tombol submit akan aktif
  useEffect(() => {
    if (
      formErrors.name === "" &&
      formErrors.category === "" &&
      formErrors.image === "" &&
      formErrors.description === "" &&
      formErrors.price === "" &&
      formErrors.freshness === ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [formErrors]);

  const category = ["Phone", "PC", "Laptop"];
  const productCategoryOptions = category.map((category, key) => (
    <option key={key} value={category}>
      {category}
    </option>
  ));

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-4">
          <p className="fs-4 fw-semibold">
            {isEdit ? "Edit Product" : "Input New Product"}
          </p>
          <form
            action=""
            method="POST"
            className="needs-validation"
            noValidate=""
            id="form"
            onSubmit={handleSubmitEdit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className={`form-control w-50 ${
                  formErrors.name && "is-invalid"
                }`}
                name="name"
                id="name"
                required=""
                value={formData.name}
                onChange={handleChange}
              />
              <div className="pt-1 text-danger" id="productNameFeedback">
                {formErrors.name}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <select
                id="category"
                className={`form-select w-25 ${
                  formErrors.category && "is-invalid"
                }`}
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option disabled="" value="" defaultValue="">
                  Choose
                </option>
                {productCategoryOptions}
              </select>
              <div className="pt-1 text-danger" id="productCategoryFeedback">
                {formErrors.category}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image of Product
              </label>
              <input
                className={`form-control btn btn-outline-primary w-50 d-block ${
                  formErrors.image && "is-invalid"
                }`}
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
              <div className="pt-1 text-danger" id="productImageFeedback">
                {formErrors.image}
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-0">Product Freshness</p>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    formErrors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  name="freshness"
                  value="new"
                  checked={formData.freshness === "new"}
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
                    formErrors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  name="freshness"
                  value="second"
                  checked={formData.freshness === "second"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio2">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    formErrors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  name="freshness"
                  value="refurbished"
                  checked={formData.freshness === "refurbished"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio3">
                  Refurbished
                </label>
                <div className="pt-1 text-danger" id="productFreshnessFeedback">
                  {formErrors.freshness}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Additional Description
              </label>
              <textarea
                className={`form-control ${
                  formErrors.description && "is-invalid"
                }`}
                id="description"
                style={{ height: 116 }}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <div className="pt-1 text-danger" id="productDescriptionFeedback">
                {" "}
                {formErrors.description}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className={`form-control ${formErrors.price && "is-invalid"}`}
                id="price"
                placeholder="$ 1"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <div className="pt-1 text-danger" id="productPriceFeedback">
                {formErrors.price}
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary mt-3"
                onClick={handleReset}
              >
                Reset Form
              </button>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className={`btn btn-${
                isEdit ? "success" : "primary"
              } d-block mx-auto w-75 mt-5`}
              disabled={!formValid}
            >
              {isEdit ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <ProductList
        products={products}
        changeProductsState={changeProductsState}
        setupEditForm={setupEditForm}
      />
    </>
  );
}
