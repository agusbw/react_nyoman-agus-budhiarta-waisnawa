# **(14) React Fundamental**

[React](https://reactjs.org/) adalah salah satu library JavaScript yang paling populer saat ini untuk membangun antarmuka pengguna (user interface/UI) yang interaktif dan responsif

Berikut adalah **3 Point** dari materi React Fundamental **‼️**

## **1. JSX**

Pada pembuatan aplikasi react, kita pasti sering menemukan kode HTML yang ditulis pada file JavaScript, hal itu dimungkinkan dengan adanya JSX. JSX adalah singkatan dari JavaScript XML, yang memungkinkan developer untuk menulis kode HTML dan JavaScript secara bersamaan dalam satu file. JSX digunakan untuk membuat komponen React dan membuat struktur tampilan.

Contoh kode JSX:

```javascript
import React from "react";

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

Pada kode JSX di atas kita dapat mereturn sebuah element HTML button pada sebuah fungsi JavaScript

## **2. React Lifecycle🔃**

React Lifecycle adalah urutan tahapan yang dilalui oleh sebuah komponen React dari awal dibuat (mount) hingga dihapus (unmount). Tahapan-tahapan ini mencakup method-method tertentu yang akan dijalankan oleh React pada saat-saat tertentu.

Berikut adalah tahapan-tahapan dalam React Lifecycle beserta penjelasan singkat mengenai setiap tahapannya:

#### Mounting

Mounting adalah tahapan pertama dalam React Lifecycle, yaitu saat sebuah komponen pertama kali dibuat dan ditambahkan ke dalam DOM.

Tahapan-tahapan dalam Mounting adalah:

- constructor: method yang pertama kali dijalankan saat sebuah komponen dibuat, dan digunakan untuk menginisialisasi state dan binding method.
- static getDerivedStateFromProps: method yang akan dijalankan setiap kali props berubah, dan digunakan untuk mengupdate state.
- render: method yang mengembalikan elemen JSX dan akan di-render ke dalam DOM.
- componentDidMount: method yang dijalankan setelah sebuah komponen selesai dirender ke dalam DOM. Method ini biasanya digunakan untuk melakukan fetch data atau memulai event listener.

#### Updating

Updating adalah tahapan ketika sebuah komponen menerima perubahan props atau state dan perlu di-update.

Tahapan-tahapan dalam Updating adalah:

- static getDerivedStateFromProps: sama seperti di tahapan Mounting, method ini akan dijalankan setiap kali props berubah dan digunakan untuk mengupdate state.
- shouldComponentUpdate: method yang digunakan untuk memeriksa apakah sebuah komponen perlu di-update atau tidak. Method ini mengembalikan nilai boolean true atau false.
- render: method yang sama seperti di tahapan Mounting.
- getSnapshotBeforeUpdate: method yang dijalankan sebelum komponen dirender ulang, dan digunakan untuk mendapatkan informasi sebelum terjadi perubahan di dalam DOM.
- componentDidUpdate: method yang dijalankan setelah sebuah komponen berhasil dirender ulang.

#### Unmounting

Unmounting adalah tahapan ketika sebuah komponen dihapus dari DOM.

Tahapan dalam Unmounting adalah:

- componentWillUnmount: method yang dijalankan sebelum sebuah komponen dihapus dari DOM. Method ini biasanya digunakan untuk membersihkan resource seperti event listener atau menghapus timer.

#### Error Handling

Error Handling adalah tahapan ketika sebuah error terjadi pada sebuah komponen.

Tahapan dalam Error Handling adalah:

- static getDerivedStateFromError: method yang dijalankan saat sebuah error terjadi pada komponen child, dan digunakan untuk mengupdate state pada komponen parent.
- componentDidCatch: method yang dijalankan saat sebuah error terjadi pada komponen child, dan biasanya digunakan untuk log error atau melakukan handling error.

## **3. Styling Component🎨**

### Berikut adalah cara memberikan _style_ pada komponen di React :

#### Inline Styling

Cara pertama adalah dengan menggunakan inline styling, yaitu dengan menambahkan atribut style pada elemen JSX.

Contoh kode:

```javascript
function Header() {
  return <h1 style={{ color: "red", fontSize: "32px" }}>Hello, World!</h1>;
}
```

#### CSS Styling

Cara kedua adalah dengan menggunakan CSS styling. Untuk menggunakan CSS styling, kita bisa menuliskan kode CSS di dalam file terpisah dan kemudian meng-importnya ke dalam komponen. Contoh:

Kode CSS:

```css
/* styles.css */
.header {
  color: red;
  font-size: 32px;
}
```

Kode JSX:

```javascript
// Header.js
import "./styles.css";

function Header() {
  return <h1 className="header">Hello, World!</h1>;
}
```

Dalam contoh di atas, saya membuat file styles.css yang berisi class CSS .header. Kemudian, mengimport file tersebut ke dalam komponen Header dan menggunakan kelas CSS tersebut pada elemen h1.

#### CSS Module

CSS modules adalah fitur yang disediakan oleh webpack yang memungkinkan kita membuat kelas CSS lokal dan unik untuk setiap komponen.

Kode CSS :

```css
/* styles.module.css */
.header {
  color: red;
  font-size: 32px;
}
```

Kode JSX :

```javascript
// Header.js
import styles from "./styles.module.css";

function Header() {
  return <h1 className={styles.header}>Hello, World!</h1>;
}
```

#### CSS-in-JS

CSS-in-JS adalah teknik yang memungkinkan kita menulis kode CSS langsung di dalam file JavaScript, baik dengan menggunakan library seperti [_styled-components_](https://styled-components.com/) atau [_emotion_](https://emotion.sh/docs/introduction), maupun dengan menggunakan fitur baru dalam React JS seperti hook useStyle.

Contoh kode:

```javascript
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "red" : "white")};
  color: ${(props) => (props.primary ? "white" : "red")};
  font-size: 16px;
  padding: 8px 16px;
`;

function App() {
  const [primary, setPrimary] = useState(false);

  const handleClick = () => {
    setPrimary((prev) => !prev);
  };

  return (
    <div>
      <Button primary={primary} onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
}
```

Dalam contoh di atas, library yang digunakan adalah [_styled-components_](https://styled-components.com/) untuk membuat komponen Button. Adanya CSS di Javascript memungkinkan value dari CSS property menjadi lebih dinamis, seperti pada contoh saya menuliskan kode CSS di dalam template literal dan menambahkan properti pada elemen JSX untuk menentukan apakah tombol tersebut merupakan tombol primary atau tidak.

**Sumber bacaan:**

- JSX: https://reactjs.org/docs/introducing-jsx.html
- React Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
- Styling Component: https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
