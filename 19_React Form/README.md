# **(19) React Form**

Form pada website adalah sebuah halaman atau bagian yang memungkinkan pengguna untuk memasukkan informasi atau data ke dalam sebuah sistem atau database. Form dapat berisikan input berupa teks, checkbox, dan lain sebagainya.

Berikut adalah **3 Point** dari materi React Form **‼️**

## **1. Basic Form**

### Penerapan

Form digunakan untuk untuk menghandle input-an dari user.
Contoh penerapan form:

- Login
- Registrasi
- Memberikan feedback
- Pengisian data
- Lain sebagainya...
  Form terdiri dari berbagai macam element input yang menangkap input user contohnya:
- <input>
- <textarea>
- <select>
- radio button
- checkbox
  Adapun element input lainnya dapat dicek [disini](https://www.w3schools.com/tags/tag_input.asp)

## **2. Uncontrolled 🆚 Controlled Input**

### Uncontrolled Input

- Seperti namanya, element input tak terkontrol, kita dapat mendapatkan nilainya menggunakan ref.
- Untuk mendapatkan nilai saat ini dari Uncontrolled, kita dapat menggunakan hook useRef, lalu mengakses value-nya dengan [ref].current.value

```javascript
import { useRef } from "react";

function Form() {
  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input type="text" id="name" name="name" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
```

Pada code di atas, kita menggunakan ref untuk mendapatkan nilai dari input-an.

### Controlled Input

- Sebuah controlled input menerima nilainya melalui props, dimana nilai/valuenya diisi dengan state dan memiliki sebuah event handler untuk melakukan perubahan value dan state.

```javascript
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
```

Pada code di atas, terlihat bahwa terdapat state name yang menjadi value dari input dan terdapat listener onChange untuk menghandle perubahan input.

### Perbedaan Utama

Perbedaan utama uncontrolled dan controlled input terdapat pada re-rendering yang terjadi, karena controlled input menggunakan melakukan perubahan state saat value form berubah, maka akan mengakibatkan re-rendering.

```
perubahan state = re-render
```

Berbeda dengan uncontrolled input, nilai input diambil menggunakan ref yang mekanismenya seperti menggunakan DOM biasa sehingga tidak melibatkan state. Metode ini dapat mencegah adanya re-render pada input.

Controlled input memberikan kontrol yang lebih besar atas nilai input dan memungkinkan untuk validasi data dengan lebih mudah, sedangkan uncontrolled input lebih sederhana dan lebih cepat untuk diimplementasikan.

## **3. Form Validation**

### Kenapa Validasi ?

- Memastikan input user sudah benar dan sesuai dengan format yang ditentukan
- Melindungi akun pengguna
- Melindungi sistem

### Tipe Validasi

#### Client-side Validation

Validasi ini dilakukan pada sisi client(browser). Validasi sudah dilakukan tanpa harus menunggu respon dari server.

- Kelebihan: user friendly, karena validasi dapat dilakukan secara langsung.

Validasi client-side dapat dilakukan dengan built-in HTML5 validation ataupun dengan bantuan javascript.

#### Server-side Validation

Validasi ini dilakukan pada sisi server. Server bertugas untuk memvalidasi dari sebelum data tersebut disimpan pada database. Nantinya jika terdapat error, maka error validasi tersebut akan dikirim kembali berupa response ke client.
