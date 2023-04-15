import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import store from "../../app/store";
import ProductForm from "./ProductForm/ProductForm";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";

describe("Form", () => {
  test("product name input should work", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByTestId("name-input");
    fireEvent.change(productName, { target: { value: "testing" } });
    expect(screen.getByTestId("name-input").value).toBe("testing");
  });

  test("All input should be required", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );

    //user click submit when all input is empty
    fireEvent.submit(screen.getByTestId("form"));

    expect(screen.getByTestId("name-error").textContent).toBe(
      "Product name is required"
    );
    expect(screen.getByTestId("image-error").textContent).toBe(
      "Product image is required"
    );
    expect(screen.getByTestId("category-error").textContent).toBe(
      "Product category is required"
    );
    expect(screen.getByTestId("freshness-error").textContent).toBe(
      "Product freshness is required"
    );
    expect(screen.getByTestId("price-error").textContent).toBe(
      "Product price is required"
    );
  });

  test("product name input should be required", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );

    const productName = screen.getByTestId("name-input");
    fireEvent.change(productName, { target: { value: "" } });
    //user click submit
    fireEvent.submit(screen.getByTestId("form"));
    expect(screen.getByTestId("name-error").textContent).toBe(
      "Product name is required"
    );
  });

  test("product name input should not contain special characters", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId("name-input");
    fireEvent.change(productName, { target: { value: "tasd@#{}" } });
    expect(screen.getByTestId("name-error").textContent).toBe(
      "Product name must not contain special characters"
    );
  });

  test("product name must be less than 25 characters", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductForm />
        </Provider>
      </BrowserRouter>
    );
    const productName = screen.getByTestId("name-input");
    fireEvent.change(productName, {
      target: {
        value: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
      },
    });
    expect(screen.getByTestId("name-error").textContent).toBe(
      "Product name must be less than 25 characters"
    );
  });
});
