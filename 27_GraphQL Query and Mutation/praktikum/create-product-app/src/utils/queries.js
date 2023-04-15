import { gql } from "@apollo/client";

const getProductsHomepage = gql`
  query getProductsHomepage {
    products(limit: 3) {
      category
      description
      freshness
      id
      name
      price
    }
  }
`;

const GET_ALL_PRODUCT = gql`
  query GetAllProducts {
    products {
      category
      description
      freshness
      id
      name
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: uuid!
    $category: String!
    $description: String!
    $freshness: String!
    $name: String!
    $price: String!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        category: $category
        description: $description
        freshness: $freshness
        name: $name
        price: $price
      }
    ) {
      id
    }
  }
`;

const ADD_PRODUCT = gql`
  mutation AddProduct(
    $category: String!
    $description: String!
    $freshness: String!
    $name: String!
    $price: String!
  ) {
    insert_products_one(
      object: {
        category: $category
        description: $description
        freshness: $freshness
        name: $name
        price: $price
      }
    ) {
      id
    }
  }
`;

export {
  getProductsHomepage,
  GET_ALL_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
};
