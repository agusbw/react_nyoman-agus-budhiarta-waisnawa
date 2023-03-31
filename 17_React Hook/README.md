# **(17) React Hooks**

[React Hook](https://react.dev/reference/react) adalah fitur baru di React 16.8. Hook mengizinkan kita untuk menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

Berikut adalah **3 Point** dari materi React Hooks **‼️**

## **1. Hook Pada React**

### 🪝Hook Dasar

- useState
- useEffect
- useContext

### 🪝Hook Tambahan

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

### 📃Aturan Pada Hook

#### Hanya Panggil Hook di Tingkat Atas

- 🚫 Jangan memanggil hooks dari dalam loops, conditions, atau nested function.

#### Hanya Panggil Hooks dari Fungsi-fungsi React

- 🚫 Jangan memanggil hooks dari fungsi javascript biasa.
- ✅ Kita dapat memanggil hooks dari komponen-komponen fungsi react.
- ✅ Kita dapat memanggil hooks dari custom hooks.

## **2. useState dan useEffect**

### useState

[useState](https://react.dev/reference/react/useState) digunakan untuk mengelola state dalam sebuah komponen fungsional. State ini akan dideklarasikan dalam bentuk sebuah array yang berisi dua elemen: nilai state itu sendiri dan fungsi yang digunakan untuk mengubah nilai state tersebut.

Contoh penggunaan useState adalah sebagai berikut:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Klik!</button>
    </div>
  );
}
```

Dalam contoh di atas, kita mendefinisikan state count menggunakan useState(0) dan fungsi setCount yang digunakan untuk mengubah nilai state count. Setiap kali button diklik, fungsi increment akan dipanggil dan memperbarui nilai state count.

### useEffect

[useEffect](https://react.dev/reference/react/useEffect) digunakan untuk mengelola efek pada functional component (seperti memperbarui tampilan atau mengambil data dari server). useEffect akan dipanggil setiap kali komponen dirender, dan kita juga dapat memberikan dependency list yang berfungsi memberikan kondisi yang memicu pemanggilan ulang efek, seperti perubahan pada suatu state.

Contoh penggunaan useEffect adalah sebagai berikut:

```javascript
import Header from "./Header/Header";
import Navbar from "../../components/layouts/Navbar/Navbar";
import ProductForm from "./ProductForm/ProductForm";
import { useEffect } from "react";

export default function CreateProduct() {
  useEffect(() => {
    alert("Welcome!");
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ProductForm />
      </div>
    </>
  );

```

Pada kode diatas useEffect akan dijalankan sekali saat komponen pertama dirender, hal ini terjadi karena kita mengisikan dependency list berupa array [].

## **3. Custom Hook**

Custom hook adalah sebuah fungsi JavaScript yang memungkinkan kita untuk mengabstraksi dan membagikan logika yang dapat digunakan kembali dalam beberapa komponen. Contoh pemanfaatan custom hook adalah untuk mengelola state yang kompleks.

**Sumber bacaan:**

- Hooks: https://react.dev/reference/react
- useEffect: https://react.dev/reference/react/useEffect
- useState: https://react.dev/reference/react/useState
- Custom Hook: https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components
