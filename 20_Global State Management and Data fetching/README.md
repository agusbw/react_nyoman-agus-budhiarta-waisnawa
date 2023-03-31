# **(20) Global State Management dan Data Fetching**

Global State Management adalah teknik yang digunakan untuk mengelola dan menyimpan state pada react secara global, sehingga data state tersebut dapat diakses dan digunakan oleh semua komponen yang ada pada aplikasi.

Berikut adalah **3 Point** dari materi Global State Management dan Data Fetching **‼️**

## **1. Redux**

### Pengertian📖

Redux adalah **salah satu** library untuk mengelola state secara global pada aplikasi react, redux dikembangkan untuk mempermudah pengelolaan data pada aplikasi web yang kompleks.

Dalam penggunaannya, redux terdiri dari **tiga elemen** utama, yakni:

- Store, adalah objek yang menyimpan seluruh state aplikasi
- Action adalah objek yang menggambarkan perubahan state
- Reducer adalah fungsi yang mengambil state saat ini dan action yang diterima, dan mengembalikan state yang baru.

### Bagaimana Redux Bekerja ♻

Dalam Redux, aplikasi mengirim action ke store untuk meminta perubahan state. Store kemudian mengirim action tersebut ke reducer, yang akan memperbarui state aplikasi sesuai dengan action tersebut. Setelah itu, store akan memperbarui seluruh komponen yang terhubung dengan state aplikasi.

### Library Alternative 〽

Pada react, sebenarnya sudah ada dedicated library untuk manajemen global state, yakni React Context yang sebenarnya sudah cukup untuk mengelola global state pada mayoritas aplikasi kecil.

Namun, apabila memerlukan library lain, redux juga bukan satu-satunya library untuk melakukan global state management, berikut adalah library lain yang dapat digunakan:

- Recoil
- Jotai
- Zustand
- dan banyak lainnya.

## **2. Reduk Thunk**

Redux Thunk adalah sebuah library middleware untuk Redux yang memungkinkan penggunaan fungsi asynchronous untuk mengirimkan action ke store Redux. Redux Thunk digunakan untuk memudahkan pengelolaan asynchronous di Redux, seperti mengambil data dari API atau melakukan request HTTP.

Dalam Redux Thunk, action creator (fungsi yang mengembalikan action) bukan hanya mengembalikan objek action, tetapi juga dapat mengembalikan sebuah fungsi. Fungsi tersebut dapat mengambil dispatch dan getState dari store, serta dapat melakukan proses asinkron sebelum akhirnya mengirimkan action ke reducer.

## **3. Data Fetching**

Data fetching adalah proses pengambilan data dari suatu sumber data, seperti API atau database. Biasanya data fetching dilakukan untuk mengambil data dari server untuk digunakan dalam komponen react. Pada aplikasi web modern, data fetching biasanya dilakukan secara asynchronous untuk menghindari blocking pada UI.

Jika menggunakan redux, kita dapat melakukan data fetching dengan **RTK Query**, RTK Query adalah sebuah library untuk memudahkan proses data fetching pada website dengan menggunakan Redux. RTK Query menyediakan banyak fitur seperti caching, deduplikasi, pagination, dan error handling secara otomatis.

Sama seperti global state management, kita juga bisa menggunakan library alternatif lain untuk melakukan data fetching, contohnya **swr dan tanstack query**

Contoh penggunaan swr:

```javascript
import useSWR from "swr";

function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <div>Data failed to Load</div>;
  if (!data) return <div>Please wait...</div>;

  return <div>{data.name}</div>;
}
```

Pada kode di atas, kita melakukan fetch data ke /api/user, dengan menggunakan library swr, kita tidak perlu lagi melakukan useEffect dan fetch lalu simpan ke state, dikarenakan data fetching langsung tersimpan di variable data, swr juga dapat langsung menghandle apabila terjadi error.
