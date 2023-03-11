# **(13) Introduction React**

[React](https://reactjs.org/) adalah salah satu library JavaScript yang paling populer saat ini untuk membangun antarmuka pengguna (user interface/UI) yang interaktif dan responsif

Berikut adalah **3 Point** dari materi _Introduction React **‼️**_

## **1. Kenapa Menggunakan React?**

### React memiliki 3 keunggulan utama yakni:

#### Deklaratif

- React menggunakan pendekatan deklaratif dalam menentukan cara UI ditampilkan.
  Dalam pemrograman deklaratif, Kita hanya menyatakan apa yang ingin dicapai, dan biarkan sistem (atau _library_) yang kita gunakan menentukan bagaimana cara mencapainya.
- Pada React, ketika membuat UI dengan React, Kita hanya perlu fokus pada mendefinisikan bagaimana tampilannya (atau state) pada setiap waktu tertentu, dan tidak perlu terlalu memperhatikan bagaimana perubahan tersebut terjadi dari satu state ke state lainnya.

Contoh kode :

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- Pada contoh kode di atas, kita mendeklarasikan fungsi Greeting yang akan merender sebuah elemen <h1> yang berisi teks "Hello, " diikuti dengan props.name. Kita tidak perlu menentukan langkah-langkah detail tentang cara merender elemen tersebut, karena React-lah yang akan menangani semua detail tersebut.

#### Component-Based

- React menggunakan paradigma komponen, di mana setiap bagian UI dapat didefinisikan sebagai komponen terpisah yang dapat diatur dan dimanipulasi secara independen. Hal ini memudahkan kita untuk membuat dan memodifikasi tampilan secara modular dan mempercepat proses pengembangan UI.

Contoh komponen dalam React:

```javascript
function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}
```

Contoh kode di atas adalah contoh sebuah komponen fungsional dengan nama Header pada React

#### Learn Once, Write Anywhere

- React dapat digunakan untuk membangun UI pada berbagai platform, baik itu web ataupun mobile. Ini dikarenakan Reac tidak terikat dengan platform atau framework tertentu dan dapat diintegrasikan dengan mudah ke dalam project yang sudah ada.

## **2. Virtual DOM (VDOM)**

Seperti namanya, _[Virtual DOM (Document Object Model)](https://reactjs.org/docs/faq-internals.html)_ adalah konsep pada React di mana sebuah representasi virtual dari DOM disimpan di memori dan diperbarui secara efisien setiap kali terjadi perubahan pada state atau props sebuah komponen. Virtual DOM merupakan sebuah struktur data yang menyerupai struktur DOM yang sebenarnya, tetapi tidak tergantung pada browser.

#### Keunggulan penerapan VDOM :

- Peningkatan performa
- Meminimalisir manipulasi DOM
- Memudahkan pengembangan aplikasi yang kompleks

## **3. Set-up Development Environment**

#### Tools :

    1. Browser
    2. Text Editor / IDE
    3. Command Line Shell

#### Langkah-langkah :

- Install [Node.js](https://nodejs.org/en/)
- Buat project react dengan ketik command berikut pada command line

```
npm create-react-app [nama_project]
```

- Masuk ke directoy project React dan jalankan aplikasi pada localhost

```
cd [nama_project]
//jalankan pada local
npm run dev
```

**Sumber bacaan:** https://reactjs.org/
