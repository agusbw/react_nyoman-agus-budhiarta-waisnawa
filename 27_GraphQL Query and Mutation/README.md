# **(27) GraphQL Query and Mutation**

GraphQL adalah sebuah bahasa query untuk API yang dapat menggantikan REST API. GraphQL memungkinkan client untuk mendapatkan data hanya dengan satu request, memungkinkan client untuk memilih data yang ingin diambil, dan menghindari over-fetching dan under-fetching data.

Berikut adalah **3 Point** dari materi Introduction GraphQL and Apollo Client Setup **‼️**

## **1. Query**

Query digunakan untuk membaca data dari server. Query mendefinisikan struktur data yang diinginkan dan memberikan hasil yang sesuai. Query memungkinkan client untuk mendapatkan data dengan presisi, hanya mengambil data yang dibutuhkan.

## **2. Mutation**

Mutation digunakan untuk mengirim data baru ke server dan melakukan perubahan pada data yang ada di server. Dalam GraphQL, mutasi dianggap sebagai operasi yang dapat memodifikasi atau membuat data baru.

## **3.Contoh pada Apollo Client**

Apollo Client adalah sebuah library untuk mengintegrasikan aplikasi React dengan GraphQL. Dengan Apollo Client, kita dapat mengambil data dari server dan menampilkannya pada Aplikasi React dengan mudah.

Contoh query:

```javascript
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

Pada kode di atas, kita melakukan query ke server untuk mendapatkan data product yang kita perlukan, yakni id dan name, untuk mengeksekusi query, kita menggunakan useQuery yang mengembalikan loading, error, dan data yang dapat kita tampilkan.

Contoh mutation:

```javascript
import { useMutation, gql } from "@apollo/client";

const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT($input: UserInput!) {
    addProduct(input: $input) {
      id
      name
      price
    }
  }
`;

function App() {
  const [addProduct, { data }] = useMutation(ADD_USER);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;

    addProduct({
      variables: { input: { name, price } },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="price" name="price" />
      <button type="submit">Add Product</button>
    </form>
  );
}
```

Pada contoh kode diatas, kita melakukan mutation untuk menambah data products, pada apollo cient kita execute mutation dengan hooks useMutation.

Materi & link lebih lanjut:

- https://graphql.org/
- https://www.apollographql.com/docs/react/
