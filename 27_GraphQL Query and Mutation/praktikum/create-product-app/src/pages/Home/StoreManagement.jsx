import {
  GET_ALL_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const category = ["Phone", "PC", "Laptop"];

export default function StoreManagement() {
  const { products } = useQuery(GET_ALL_PRODUCT)?.data || { products: [] };
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const [deleteProduct, { loading: deleteLoading }] = useMutation(
    DELETE_PRODUCT,
    {
      refetchQueries: [{ query: GET_ALL_PRODUCT }],
    }
  );
  const [addProduct, { loading: addLoading }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_ALL_PRODUCT }],
  });
  const [updateProduct, { loading: updateLoading }] = useMutation(
    UPDATE_PRODUCT,
    {
      refetchQueries: [{ query: GET_ALL_PRODUCT }],
    }
  );

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure want to delete this product?");
    if (confirm) {
      deleteProduct({
        variables: {
          id,
        },
      });
    }
  };

  const handleEdit = (id) => {
    const product = products.find((product) => product.id === id);
    setIsEdit({
      status: true,
      id,
    });
    setValue("name", product.name);
    setValue("category", product.category);
    setValue("freshness", product.freshness);
    setValue("price", product.price);
    setValue("description", product.description);
  };

  const onSubmit = (data) => {
    if (!isEdit.status) {
      addProduct({
        variables: {
          name: data.name,
          category: data.category,
          freshness: data.freshness,
          price: data.price,
          description: data.description,
        },
      });
      alert("Product added!");
    } else {
      updateProduct({
        variables: {
          id: isEdit.id,
          name: data.name,
          category: data.category,
          freshness: data.freshness,
          price: data.price,
          description: data.description,
        },
      });
      setIsEdit({
        status: false,
        id: "",
      });
      alert("Product edited!");
    }
    reset();
  };

  const productCategoryOptions = category.map((category, key) => (
    <option key={key} value={category}>
      {category}
    </option>
  ));

  return (
    <div className="row">
      <div className="col-12 mb-5 justify-content-center d-flex">
        <div className="col-lg-6 mt-4">
          <p className="fs-4 fw-semibold">
            {isEdit.status ? "Edit Product" : "Input New Product"}
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
                  setIsEdit((prev) => {
                    return {
                      ...prev,
                      status: false,
                      id: "",
                    };
                  });
                }}
              >
                Reset Form
              </button>
            </div>
            <button
              id="submitBtn"
              type="submit"
              className={`btn btn-${
                isEdit.status ? "success" : "primary"
              } d-block mx-auto w-75 mt-5`}
              disabled={addLoading || updateLoading}
              data-testid="submit-btn"
            >
              {isEdit.status ? "Edit" : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <div className="col-12 px-5 mb-5">
        <h3>Store Management</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">freshness</th>
              <th scope="col">category</th>
              <th scope="col">description</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.freshness}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                  <td>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleEdit(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product.id)}
                      disabled={deleteLoading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <input
          type="text"
          className="form-control w-25 d-block mx-auto my-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Product By Name"
        />
      </div>
    </div>
  );
}
