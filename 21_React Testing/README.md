# **(21) React Testing**

Berikut adalah **3 Point** dari materi React Testing **‼️**

## **1. Apa itu testing?**

### Pengertian📖

Testing adalah serangkaian pengujian yang dilakukan pada kode program yang bertujuan agar menjaga dan memastikan kode program yang dibuat dapat menghasilkan output sesuai yang diharapkan

### Jenis-Jenis Testing〽

- Unit testing

  Unit testing adalah test yang dilakukan untun memeriksa satu unit kode secara terisolasi untuk memastikan unit tersebut berfungsi dengan benar.

- Integration Testing

  Memeriksa bagaimana beberapa unit kode bekerja bersama dalam satu sistem. Misalnya pengujian dilakukan pada komponen Navbar.

- End to End Testing

  Melakukan pengujuan untuk memeriksa keseluruhan sistem berfungsi dari prespektif pengguna.

- Static

  Melakukan testing dengan menerapkan static tyipng pada kode program, misalnya menggunakan typescript.

### Manfaat Testing

- Meningkatkan percaya diri terhadap program yang dibuat.
- Sangat meminimalisir kemungkinan adanya bug.

## **2. Implementasi Testing**

Untuk melakukan pengujian atau testing pada front-end, khususnya react. Kita dapat menggunakan bantun external library.

Tools yang digunakan pada contoh berikut adalah penggabungan antara [vitest](https://vitest.dev/), [RTL](https://testing-library.com/docs/react-testing-library/intro/), dan [Happydom](https://www.npmjs.com/package/happy-dom).

Goals: Menguji input field product name tidak mengandung special character dan memunculkan pesan error ketika ada.

```javascript
test("product name input should not contain special characters", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductForm />
      </Provider>
    </BrowserRouter>
  );
  const productName = screen.getByTestId("name-input");
  fireEvent.change(productName, { target: { value: "tasd@#{}" } });
  expect(screen.getByTestId("name-error").textContent).toBe(
    "Product name must not contain special characters"
  );
});
```

Pada kode diatas, kita melakukan tes dengan nama _product name input should not contain special characters_, dengan langkah sebagai berikut:

- Menjalankan fungsi render yang mereturn JSX, fungsi render ini berfungsi untuk mereturn komponen yang akan kita uji selanjutnya.
- Mengambil input field dan menyimpannya dalam sebuah variable productName
- Melakukan mock event onChange dengan menambahkan value yang berisikan simbol.
- Menambahkan ekspetasi hasil test, dimana pada element dengan test id name-error akan mengandung text _Product name must not contain special characters_.

## **3. Testing Custom Hook**

Terkadang ketika melakukan testing, kita ingin melakukan testing pada custom hook saja tanpa merender keseluruhan komponen. Untuk melakukan hal tersebut, kita dapat memanfaatkan library: react hook testing library.

Berikut adalah implementasi sederhananya:

```javascript
//customHook.js
import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return { count, increment };
};
```

```javascript
// customHook.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./customHook";

describe("useCounter", () => {
  it("should start with 0", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });

  it("should increment count by 1", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

- Pertama, kita mendefinisikan custom hook yang mengembalikan state count dan fungsi increment untuk meningkatkan nilai count.
- Kemudian, kita menggunakan renderHook dari library tes custom hooks untuk menguji hook tersebut.
- Pada tes pertama, kita menguji apakah nilai count awal sama dengan 0.
- Pada tes kedua, kita menggunakan act untuk mengeksekusi increment dan memeriksa apakah count bertambah menjadi 1.
