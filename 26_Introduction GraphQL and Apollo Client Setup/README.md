# **(25) Introduction GraphQL and Apollo Client Setup**

Berikut adalah **3 Point** dari materi Introduction GraphQL and Apollo Client Setup **‼️**

## **1. GraphQL**

### Pengertian📑

GraphQL adalah sebuah bahasa query yang digunakan untuk mengambil data dari sebuah server. GraphQL memungkinkan client untuk menentukan dan meminta hanya data yang dibutuhkan, sehingga memungkinkan client untuk mengambil data dengan lebih efisien dan presisi. GraphQL juga memungkinkan client untuk menentukan format data yang diinginkan, sehingga mengurangi beban kerja server dalam memformat data yang dikirim.

Dalam GraphQL, client menentukan data yang diinginkan dengan mengirimkan query ke server. Server kemudian akan merespon dengan data yang diminta sesuai dengan format yang telah ditentukan oleh client dalam query tersebut.

Salah satu kelebihan utama dari GraphQL adalah fleksibilitasnya dalam menangani request yang kompleks. GraphQL memungkinkan client untuk melakukan query terhadap beberapa data sources atau collections sekaligus, sehingga memungkinkan client untuk menggabungkan data dari beberapa sumber yang berbeda menjadi satu dalam satu request.

## **2. GraphQL Core Feature**

### Terdapat 3 Core Feature dari GraphQL, yakni:

#### Query

Cara untuk mendapatkan data sesuai dengan query yang sudah kita definisikan, dengan GraphQL kita dapat meminta data sesuai dengan field apa yang kita butuhkan. Contohnya:

```javascript
//REST
[
  {
    id: 1,
    name: "Asus",
    category: "Laptop",
    description: "Lorem ipsum dolor sit amet",
    freshness: "new",
    price: "1000",
  }
]

//GraphQL Query
{
  query{
    products{
      id
      name
    }
  }
}

//GraphQL Result
{
  products:[
    {
      id: 1,
      name: "Asus",
    }
  ]
}
```

Pada contoh kode di atas, pada REST kita mendapatkan semua data atau field saat melakukan GET data, tetapi pada GraphQL kita dapat secara spesifik pada query menentukan field apa saja yang akan kita perlukan, sehingga resultnya pun hanya mengembalikan field tersebut.

- GraphQL Query juga dapat melakukan query ke banyak collections atau data sources baik itu yang related/berelasi ataupun unrelated/tidak berelasi

- Query GraphQL juga mendukung GraphQL fragment, fragment adalah potongan logic yang kita dapat gunakan di beberapa query ataupun mutation, hal ini dapat meringkas query atau mutation yang kita buat.

#### Mutation

Mutation digunakan untuk melakukan manipulasi data, baik itu insert, update, dan delete data. Dalam melakukan mutatuon, kita akan mendefine operasi yang ingin dilakukan dan juga mendefine data apa yang perlu direturn oleh GraphQL

#### Subscription

Subscription adalah fitur GraphQL untuk mendapatkan data realtime atau data based on events, subscription mengizinkan server untuk mengirim data kepada client ketika melakukan event tertentu. Biasanya subscription diimplementasikan dengan WebSockets. Pada setup yang seperti ini, server mempertahankan koneksi yang stabil ke client yang melakukan subscription.

- Ketika ada modifikasi data, client akan mendapatkan data terupdate langsung secara real-time.

## **3. Tools**

- Hasura

  Hasura adalah BaaS (Backend as a Service) yang membantu kita untuk mensetup backend GraphQL server. Nantinya, kita perlu melakukan koneksi antara hasura dengan sebuah database untuk penyimpanan data.

- Railway

  Railway adalah platform yang dapat menyediakan infrastruktur, mengembangkan dengan infrastruktur tersebut secara lokal, lalu menerapkannya ke cloud. Pada kasus ini, kita menggunakan Railway untuk menyiapkan database PostgreSQL yang akan dikoneksikan ke Hasura

- Apollo Client

  Apollo client digunakan client (dalam hal ini aplikasi react kita) untuk melakukan pengambilan data di server. Pada REST API, biasanya kita menggunakan fetch atau axios, jika pakai GraphQL kita dapat menggunakan Apollo Client.

Instalasi Apollo Client:

```
npm install @apollo/client graphql
```

Selanjutnya kita dapat melakukan inisiasi ApolloClient dengan contoh sebagai berikut.

```javascript
//index.js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});
```

- uri adalah URL dari GraphQL server kita.
- cache adalah instance dari InMemoryCache, yang Apollo Client gunakan untuk melakukan caching pada query results setelah fetching.

Materi & link lebih lanjut:

- https://graphql.org/
- https://www.apollographql.com/docs/react/get-started
- https://hasura.io/learn/graphql/backend-stack/languages/node/
- https://railway.app/
