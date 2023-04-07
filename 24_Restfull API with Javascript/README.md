# **(24) Restfull API with Javascript**

Berikut adalah **3 Point** dari materi Restfull API with Javascript **‼️**

## **1. Mock API**

### Pengertian📑

Mock API adalah sebuah simulasi API yang dibuat untuk menirukan perilaku API yang sebenarnya. Mock API sering digunakan dalam pengembangan front-end untuk membantu pengembang melakukan pengujian dan pengembangan aplikasi tanpa harus terhubung ke API yang sebenarnya.

Dengan menggunakan Mock API, pengembang dapat melakukan pengujian secara lokal tanpa harus bergantung pada API yang sedang berjalan di server yang mungkin sedang dalam tahap pengembangan atau perbaikan. Mock API juga memungkinkan pengembang untuk menguji berbagai skenario yang mungkin sulit direproduksi di lingkungan produksi.

### Manfaat🌞

- Front-end dan Back-end dapat berkerja secara bersamaan
- Fast feedback loop
- Issue lebih cepat ditemukan
- Dapat mendevelop test dan API secara bersamaan

### Contoh Mock API

Contoh platform penyedia mock API adalah:

- [MockAPI](https://mockapi.io/)
- [ReqRes](https://reqres.in/)
- [Mocky](https://designer.mocky.io/)

## **2. Fetch Data dengan Axios**

Axios adalah sebuah library JavaScript yang digunakan untuk melakukan HTTP request (termasuk GET, POST, PUT, DELETE, dsb.) ke server.

Langkah-langkah:

- Install axios dengan perintah "npm install axios" (jika menggunakan npm)
- Import axios di file komponen React yang ingin Anda gunakan untuk mengambil data
- Buat fungsi async untuk mengambil data dari server menggunakan axios
- Setelah data diterima, gunakan setState untuk menetapkan data ke state komponen

Untuk melakukan fetch data, kita menggunakan method GET dengan contoh kode sebagai berikut:

```javascript
const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products")
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
}, []);
```

Kode di atas digunakan pada sebuah component tempat kita ingin melakukan pengambilan data, Kita dapat memanfaatkan useEffect untuk melakukan GET request saat komponen baru dirender lalu menyimpan response datanya pada state.

## **3. Insert, Delete dan Update dengan Axios**

Seperti yang sudah dijelaskan sebelumnya, kita juga dapat melakukan HTTP Request lain seperti POST untuk menambahkan data, DELETE untuk menghapus data, dan PUT untuk memperbaharui data.

Adapun contoh penerapannya dapat dilihat pada kode di bawah:

```javascript
import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://6428ef045a40b82da4c9fa2d.mockapi.io/api/products";
export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const deleteProduct = async (id) => {
    setIsLoading(true);
    await axios.delete(`${BASE_URL}/${id}`);
    setIsLoading(false);
  };

  const createProduct = async (product) => {
    setIsLoading(true);
    await axios.post(BASE_URL, product);
    setIsLoading(false);
  };

  const updateProduct = async (id, product) => {
    setIsLoading(true);
    await axios.put(`${BASE_URL}/${id}`, product);
    setIsLoading(false);
  };

  return { deleteProduct, isLoading, createProduct, updateProduct };
}
```

Pada kode di atas, kita membuat 3 functions yang masing-masing melakukan HTTP request dengan method berbeda, yakni DELETE, POST, dan PUT. Pada kode di atas, platform MockAPI digunakan untuk melakukan simulasi Restfull API.

Materi lebih lanjut:

- https://github.com/mockapi-io/docs/wiki
- https://axios-http.com/docs/intro
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
