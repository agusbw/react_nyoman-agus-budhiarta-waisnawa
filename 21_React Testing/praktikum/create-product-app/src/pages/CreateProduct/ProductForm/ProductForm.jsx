import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductList from "../ProductList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { insert, update } from "../../../features/product/productSlice";

export default function ProductForm() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);

  const emptyForm = {
    name: "",
    category: "",
    image: "",
    description: "",
    price: "",
    freshness: "",
  };

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
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

  const handleChange = (e) => {
    const name = e.target.name;
    let value;
    if (name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        value = reader.result;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      reader.readAsDataURL(file);
    } else {
      value = e.target.value;
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setFormErrors({
      ...formErrors,
      [name]: "",
    });

    if (value === "") {
      setFormErrors({
        ...formErrors,
        [name]: `Product ${name} is required`,
      });
    }

    if (name === "name") {
      const isNonWordRegex = /[!@#$%^&*(),.?":{}|<>'\\/\-_=`~\]\[;]/;
      if (isNonWordRegex.test(value)) {
        setFormErrors({
          ...formErrors,
          name: "Product name must not contain special characters",
        });
      }

      if (value.length > 25) {
        setFormErrors({
          ...formErrors,
          name: "Product name must be less than 25 characters",
        });
      }
    }

    if (name === "price") {
      const priceRegex = /[0-9\b]+$/;
      if (!priceRegex.test(value)) {
        setFormErrors({
          ...formErrors,
          price: "Please enter a valid number!",
        });
      } else if (value < 0) {
        setFormErrors({
          ...formErrors,
          price: "Product price must be greater than 0",
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
        dispatch(update(formData));
        setFormData(emptyForm);
        setIsEdit(false);
        alert("Product edited!");
      } else {
        dispatch(insert({ ...formData, uuid: uuidv4() }));
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
    });
  };

  const changeProductsState = (newProductsState) => {
    setProducts(newProductsState);
  };

  const setupEditForm = (uuid) => {
    setFormErrors({
      ...emptyForm,
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
            data-testid="form"
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
                data-testid="name-input"
              />
              <div
                className="pt-1 text-danger"
                id="productNameFeedback"
                data-testid="name-error"
              >
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
                data-testid="category-input"
                value={formData.category}
                onChange={handleChange}
              >
                <option disabled="" value="" defaultValue="">
                  Choose
                </option>
                {productCategoryOptions}
              </select>
              <div
                className="pt-1 text-danger"
                id="productCategoryFeedback"
                data-testid="category-error"
              >
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
                accept="image/png, image/jpeg"
                type="file"
                data-testid="image-input"
                id="image"
                name="image"
                onChange={handleChange}
              />
              <div
                className="pt-1 text-danger"
                id="productImageFeedback"
                data-testid="image-error"
              >
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
                  data-testid="freshness-input1"
                  name="freshness"
                  value="new"
                  checked={formData.freshness === "new"}
                  onChange={handleChange}
                  id="radio1"
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
                  data-testid="freshness-input2"
                  name="freshness"
                  value="second"
                  checked={formData.freshness === "second"}
                  onChange={handleChange}
                  id="radio2"
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
                  data-testid="freshness-input3"
                  value="refurbished"
                  checked={formData.freshness === "refurbished"}
                  onChange={handleChange}
                  id="radio3"
                />
                <label className="form-check-label" htmlFor="radio3">
                  Refurbished
                </label>
                <div
                  className="pt-1 text-danger"
                  id="productFreshnessFeedback"
                  data-testid="freshness-error"
                >
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
                data-testid="description-input"
                style={{ height: 116 }}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <div
                className="pt-1 text-danger"
                id="productDescriptionFeedback"
                data-testid="description-error"
              >
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
                data-testid="price-input"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              <div
                className="pt-1 text-danger"
                id="productPriceFeedback"
                data-testid="price-error"
              >
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
              data-testid="submit-btn"
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
