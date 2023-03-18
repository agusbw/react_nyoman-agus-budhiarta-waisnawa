# **(15) Event Handling**

Berikut adalah **3 Point** dari materi Event Handling **‼️**

## **1. State**

State merupakan salah satu konsep dasar dalam React. State dapat digunakan untuk menyimpan data yang nantinya dapat diubah oleh pengguna. Ketika state diubah, React akan secara otomatis melakukan rendering ulang komponen yang menggunakan state tersebut. State adalah data private dalam sebuah komponen, ini berarti data state hanya tersedia di komponen tersebut dan tidak dapat diakses dari komponen lain.

Contoh penggunaan state:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Tombol diklik sebanyak {count} kali</p>
      <button onClick={handleClick}>Klik!</button>
    </div>
  );
}
```

Pada contoh di atas, kita menggunakan useState untuk membuat state count yang awalnya bernilai 0. Ketika tombol di klik, handleClick akan dipanggil dan memperbarui nilai count dengan memanggil fungsi setCount. Kemudian, nilai count akan ditampilkan pada paragraf.

## **2. Statefull dan Stateless**

Komponen dalam React dapat dibagi menjadi 2 jenis, yaitu stateful dan stateless. Komponen stateful memiliki state, sedangkan komponen stateless tidak memiliki state dan hanya menerima props.

Contoh komponen stateful:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Tombol diklik sebanyak {count} kali</p>
      <button onClick={handleClick}>Klik!</button>
    </div>
  );
}
```

Contoh komponen stateless:

```javascript
import React from "react";

function SayHello(props) {
  return <h1>Halo, {props.name}!</h1>;
}
```

Pada contoh di atas, Counter adalah komponen stateful karena memiliki state count, sedangkan Greeting adalah komponen stateless karena hanya menerima props.

## **3. Event Handling**

Event handling adalah metode untuk menangani sebuah event yang diberikan kepada suatu komponen. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen,misalnya ketika tombol ditekan. Event Handling dalam React dilakukan dengan menambahkan prop berupa nama eventnya pada elemen yang ingin ditambahkan event handling.

Beberapa Jenis list Event:

- Clipboard Events (Promise terpenuhi)
- Form Events (onChange, onSubmit)
- Mouse Events (onClick, onDoubleClick, onMouseOver)
- Generic Events (onError, onLoad)

Contoh penggunaan event handling:

```javascript
import React, { useState } from 'react';

function Counter() {
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Tombol diklik sebanyak {count} kali</p>
      <button onClick={handleClick}>Klik!</button>
    </div>
  );
}
```

Pada contoh di atas, prop onClick ditambahkan pada elemen button dengan nilai handleClick. Ketika tombol tersebut di klik, fungsi handleClick akan dipanggil dan memperbarui nilai state count. Kemudian, nilai count akan ditampilkan pada paragraf.

**Sumber bacaan:**

- React Page: https://react.dev/
