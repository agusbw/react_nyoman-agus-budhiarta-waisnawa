# **(18) React Routing**

[React Router](https://reactrouter.com/en/main) adalah salah satu library routing yang digunakan pada aplikasi web yang dibangun dengan React.React Router dapat membantu membuat navigasi antar halaman pada aplikasi web secara dinamis dengan mengubah tampilan sesuai dengan URL. Selain dengan library react router, routing pada react juga dapat memanfaatkan library lainnya. Namun, pada pembahasan ini library yang digunakan adalah [react router](https://reactrouter.com/en/main)

Berikut adalah **3 Point** dari materi React Routing **‼️**

## **1. Routes**

### Router

Router adalah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA _(Single Page Application)_

Routing pada react menggunakan library [react router](https://reactrouter.com/en/main). Dengan menggunakan [react router](https://reactrouter.com/en/main), kita dapat membuat aplikasi yang lebih dinamis dengan menyediakan navigasi antar halaman tanpa perlu melakukan request halaman baru dari server.

```
//instalasi react router
npm install react-router-dom
```

Contoh penggunaan:

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import ProdutPage from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProdutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Pada kode di atas kita mengimport BrowserRouter, Routes, dan Route dari react-router-dom.

### BrowserRouter

Komponen ini bertanggung jawab untuk membuat router di dalam aplikasi React. Dalam hal ini, BrowserRouter menggunakan HTML5 History API untuk memanipulasi URL di dalam browser.

### Routes

Komponen yang digunakan untuk menentukan route yang ada di dalam aplikasi. Komponen ini memungkinkan kita untuk menentukan route dan komponen yang akan ditampilkan ketika route tersebut diakses.

### Route

Route adalah komponen yang digunakan untuk menentukan route spesifik di dalam Routes. Komponen ini digunakan untuk menentukan path dan komponen yang akan ditampilkan ketika path tersebut diakses.

## **2. Outlet, Link, NavLink**

### Outlet

Outlet adalah komponen yang disediakan oleh React Router dan digunakan untuk menampilkan komponen yang sesuai dengan route yang sedang diakses. Komponen ini digunakan dalam nested route dan bertindak sebagai tempat menampung komponen-komponen yang akan ditampilkan.

### Link & NavLink

Link dan NavLink adalah komponen yang disediakan oleh React Router dan digunakan untuk melakukan navigasi antar halaman di dalam aplikasi React. Kedua komponen ini memiliki fungsi yang sama, yaitu untuk menavigasi ke route tertentu ketika komponen tersebut diklik (mirip seperti tag a pada HTML). Perbedaannya adalah, NavLink memiliki tambahan fitur untuk menambahkan class atau style ketika link aktif, sehingga dapat digunakan untuk menandai link yang sedang aktif.

## **3. Hook Routing React**

Library react router memiliki beberapa hook yang dapat dimanfaatkan pada komponen react. Adapun beberapa contoh hook pada react router adalah.

- useParams: Digunakan untuk mendapatkan nilai parameter pada URL.
- useNavigate: Digunakan untuk navigasi programatik dalam aplikasi React.
- useLocation: Digunakan untuk mendapatkan informasi tentang lokasi (path, search, hash) pada aplikasi React.
- useMatch: Digunakan untuk mencocokkan URL dengan pola tertentu.
  Dengan menggunakan hook pada React Router, manipulasi route dan data pada aplikasi kita dapat dilakukan dengan lebih mudah.

**Sumber bacaan:**

- React Router: https://reactrouter.com/en/main
