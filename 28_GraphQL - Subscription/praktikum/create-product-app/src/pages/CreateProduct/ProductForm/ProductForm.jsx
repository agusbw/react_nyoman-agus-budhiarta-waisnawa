import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../../../utils/useFetch";
import { mutate } from "swr";
import ProductList from "../ProductList/ProductList";
import axios from "axios";

const url = "https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products";

export default function ProductForm() {
  const { isLoading: fetchLoading, createProduct, updateProduct } = useFetch();
  const [isEdit, setIsEdit] = useState(false);
  const [productEditId, setprodudctEditId] = useState();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isLoading },
  } = useForm();

  const onSubmit = async (data) => {
    if (isEdit) {
      await updateProduct(productEditId, data);
      alert("Product Edited");
      reset();
      mutate(url);
      setIsEdit(false);
    } else {
      await createProduct(data);
      alert("Product added!");
      mutate(url);
      reset();
    }
  };

  const setupEditForm = async (uuid) => {
    reset();
    setIsEdit(true);
    setprodudctEditId(uuid);
    try {
      const res = await axios.get(`${url}/${uuid}`);
      setValue("name", res.data.name);
      setValue("category", res.data.category);
      setValue("image", res.data.image);
      setValue("freshness", res.data.freshness);
      setValue("description", res.data.description);
      setValue("price", res.data.price);
    } catch (error) {
      console.log(error);
    }
  };

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
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className={`form-control w-50 ${errors.name && "is-invalid"}`}
                name="name"
                id="name"
                required=""
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required!",
                  },
                  maxLength: {
                    value: 10,
                    message:
                      "Product name length must less than 10 characters!",
                  },
                })}
                data-testid="name-input"
              />
              <div
                className="pt-1 text-danger"
                id="productNameFeedback"
                data-testid="name-error"
              >
                {errors?.name?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Product Category
              </label>
              <select
                id="category"
                className={`form-select w-25 ${
                  errors.category && "is-invalid"
                }`}
                name="category"
                data-testid="category-input"
                {...register("category", {
                  required: {
                    value: true,
                    message: "Product category is required",
                  },
                })}
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
                {errors?.category?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image of Product
              </label>
              <input
                className={`form-control btn btn-outline-primary w-50 d-block ${
                  errors.image && "is-invalid"
                }`}
                accept="image/png, image/jpeg"
                type="file"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Product image is required!",
                  },
                })}
                data-testid="image-input"
                id="image"
                name="image"
              />
              <div
                className="pt-1 text-danger"
                id="productImageFeedback"
                data-testid="image-error"
              >
                {errors?.image?.message}
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-0">Product Freshness</p>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  data-testid="freshness-input1"
                  name="freshness"
                  {...register("freshness", {
                    required: {
                      value: true,
                      message: "Product freshness is required",
                    },
                  })}
                  value="new"
                  id="radio1"
                />
                <label className="form-check-label" htmlFor="radio1">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  data-testid="freshness-input2"
                  {...register("freshness", {
                    required: {
                      value: true,
                      message: "Product freshness is required",
                    },
                  })}
                  name="freshness"
                  value="second"
                  id="radio2"
                />
                <label className="form-check-label" htmlFor="radio2">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.freshness && "is-invalid"
                  }`}
                  type="radio"
                  name="freshness"
                  {...register("freshness", {
                    required: {
                      value: true,
                      message: "Product freshness is required",
                    },
                  })}
                  data-testid="freshness-input3"
                  value="refurbished"
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
                  {errors?.freshness?.message}
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Additional Description
              </label>
              <textarea
                className={`form-control ${errors.description && "is-invalid"}`}
                id="description"
                data-testid="description-input"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Product description is required",
                  },
                })}
                style={{ height: 116 }}
                name="description"
              />
              <div
                className="pt-1 text-danger"
                id="productDescriptionFeedback"
                data-testid="description-error"
              >
                {errors?.description?.message}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className={`form-control ${errors.price && "is-invalid"}`}
                id="price"
                placeholder="$ 1"
                data-testid="price-input"
                name="price"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Product price is required",
                  },
                })}
              />
              <div
                className="pt-1 text-danger"
                id="productPriceFeedback"
                data-testid="price-error"
              >
                {errors?.price?.message}
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary mt-3"
                onClick={() => {
                  reset();
                  setIsEdit(false);
                }}
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
              disabled={isLoading || fetchLoading}
              data-testid="submit-btn"
            >
              {isEdit ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <ProductList setupEditForm={setupEditForm} />
    </>
  );
}
