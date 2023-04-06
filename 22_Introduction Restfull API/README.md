# **(22) Introduction Restfull API**

Berikut adalah **3 Point** dari materi Introduction Restfull API **‼️**

## **1. Restfull API**

### Kenapa Perlu Restfull API?

Sebuah aplikasi dituntut untuk multiplatform, misalnya untuk menggunakan aplikasi instagram, kita dapat mengaksesnya dari Android, IOS, dan Website. Dengan menggunakan Restfull API kita dapat menggunakan satu backend service saja untuk semua platform tersebut.

Kegunaan lain dari Restfull API:

- Salah satu kegunaan dari Restfull API adalah untuk mengintegrasikan aplikasi yang berbasis Frontend dan Backend, sehingga aplikasi tidak harus dibuat secara _monolith_. Integrasi ini dilakukan dengan proses _requeset_ yang dikirim oleh client dan _response_ berupa data yang dikirim atau diprovide dari server.

- Restfull API juga dapat digunakan untuk melakukan integrasi service to service, sebagai contoh aplikasi e-commerece memerlukan Restfull API dari _payment gateway_ untuk menyediakan fitur pembayaran, dan pihak payment gateway pun terhubung dengan berbagai bank dengan bantuan Restfull API

## **2. Restfull API**

REST atau Representational State Transfer adalah sebuah standar arsitektur web yang menggunakan protokol HTTP untuk transfer data. Lebih dikenal sebagai Restfull API

RESTful API memungkinkan _client_ (seperti aplikasi atau situs web) untuk berkomunikasi dengan server (yang menyimpan dan memproses data) untuk mengambil atau memanipulasi data.

Dalam RESTful API, setiap permintaan dari _client_ ke server mengandung informasi tentang apa yang diinginkan _client_ dan apa yang harus dilakukan oleh server. Server kemudian merespon dengan data yang diminta atau pesan _error_ jika terjadi masalah.

Contohnya, jika ingin ingin menampilkan daftar produk dari sebuah web, Anda dapat mengirim permintaan GET ke RESTful API tersebut dengan URL yang sesuai, seperti "https://www.mywebsite.com/api/products". Server kemudian akan merespon dengan daftar produk yang diminta dalam format yang telah ditentukan.

### Request dan Response Format

Restfull API dapat menggunakan request dan response format sebagai berikut:

- **JSON** umum dan disarankan
- XML
- SOAP

## **3. HTTP Request Method dan HTTP Response Status Code**

### HTTP Request Method

Terdapat 4 Jenis HTTP _request method_ yang biasanya digunakan dalam Restfull API, yakni:

- GET: Method ini digunakan untuk membaca atau mengambil data dari server. Contohnya ketika mengambil data list produk yang tersimpan pada server.

- POST: Method ini digunakan untuk membuat atau menambah data baru ke server. Contohnya adalah ketika kita mengisi formulir pendaftaran atau menambahkan sebuah produk baru.

- PUT: Method ini digunakan untuk mengubah atau mengganti data yang sudah ada pada server. Contohnya adalah ketika kita mengubah informasi kategori produk yang tersimpan di server.

- DELETE: Method ini digunakan untuk menghapus data yang sudah ada pada server. Contohnya adalah ketika kita menghapus sebuah pesan atau menghapus sebuah file dari server.

Selain itu, terdapat juga HTTP request method lain seperti

- HEAD
- OPTION
- PATCH

### HTTP Response Status Code

Secara garis besar HTTP _Response Status Code_ dapat dibagi menjadi 4 yakni:

- 2xx (Successful): Status code ini menunjukkan bahwa permintaan telah berhasil dan server telah mengirimkan respons yang valid. Contohnya 200 OK dan 201 Created

- 3xx (Redirection): Status code ini menunjukkan bahwa permintaan perlu diarahkan ke alamat URL lain untuk mendapatkan respons yang valid. Contohnya adalah 301 Moved Permanently.

- 4xx (Client Error): Status code ini menunjukkan bahwa terdapat kesalahan pada permintaan yang dikirimkan oleh client. Contohnya adalah 404 Not Found.

- 5xx (Server Error): Status code ini menunjukkan bahwa terdapat kesalahan pada sisi server saat memproses permintaan. Contohnya adalah 500 Internal Server Error.

Materi lebih lanjut:

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
