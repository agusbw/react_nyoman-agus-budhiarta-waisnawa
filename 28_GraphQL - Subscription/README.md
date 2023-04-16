# **(28) GraphQL - Subscription**

GraphQL adalah sebuah bahasa query untuk API yang dapat menggantikan REST API. GraphQL memungkinkan client untuk mendapatkan data hanya dengan satu request, memungkinkan client untuk memilih data yang ingin diambil, dan menghindari over-fetching dan under-fetching data.

Berikut adalah **3 Point** dari materi GraphQL - Subscription **‼️**

## **1. Web Socket**

Websocket adalah protokol komunikasi dua arah antara server dan client secara real-time. Fitur ini memungkinkan server mengirim data secara asynchronous ke client tanpa perlu request ulang. Websocket dilengkapi dengan event-driven API, sehingga bisa menangani banyak koneksi secara efisien. Biasanya web socket digunakan untuk membuat aplikasi yang berjalan secara real-time contohnya aplikasi yang memerlukan pemantauan data, real-time gaming, real-time communication seperti live chat ataupun voice.

## **2. GraphQL Subscription**

GraphQL Subscription adalah salah satu dari 3 core feature GraphQL yang memungkinkan client untuk mensubscribe data dalam artian client dapat "berlangganan" untuk mendapatkan data yang dihasilkan oleh server secara real-time. Dengan menggunakan GraphQL Subscription, clent bisa menerima notifikasi setiap kali data yang relevan dengan data yang disubscribe terdapat perubahan. Contoh penggunaan GraphQL Subscription adalah notifikasi real-time dan update data secara real-time.

## **3. Hubungan Web Socket dengan GraphQL Subscription**

Hubungan antara Websocket dan GraphQL Subscription adalah GraphQL Subscription menggunakan Websocket sebagai protokol untuk mengirimkan data real-time dari server ke klien. Dalam hal ini, Websocket menjadi infrastruktur utama yang membuat GraphQL Subscription bisa digunakan secara efektif.

Materi & link lebih lanjut:

- https://graphql.org/
- https://www.apollographql.com/docs/react/
