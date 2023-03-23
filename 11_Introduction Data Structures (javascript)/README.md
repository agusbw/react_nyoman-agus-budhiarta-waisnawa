# **(11) Introduction Data Structure (Javascript)**

Berikut adalah **3 Point** dari materi data structure **‼️**

## **1. Array []**

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) adalah salah satu struktur data yang paling umum digunakan dalam pemrograman. Dalam JavaScript, array adalah tipe data yang digunakan untuk menyimpan kumpulan nilai atau objek dalam satu variabel. Index array dimulai dari 0, dan pengaksesan nilai array dilakukan dengan bracket notation.

Array di JavaScript memiliki beberapa fungsi built-in, di antaranya adalah:

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): digunakan untuk mengubah setiap elemen dalam array menjadi nilai baru dan menyimpannya dalam array baru.

  Contoh penggunaannya:

        const numbers = [1, 2, 3, 4, 5];

        const doubledNumbers = numbers.map((number) => number * 2);

        console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce): digunakan untuk mengumpulkan semua elemen dalam array menjadi satu nilai.

  Contoh penggunaan reduce:
  const numbers = [1, 2, 3, 4, 5];

        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        console.log(sum); // Output: 15

- [Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find): digunakan untuk mencari nilai tertentu dalam array.

  Contoh penggunaan find:

        const numbers = [1, 2, 3, 4, 5];

        const foundNumber = numbers.find((number) => number === 3);

        console.log(foundNumber); // Output: 3

- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter): digunakan untuk membuat array baru dengan hanya elemen yang memenuhi kondisi tertentu.

  Contoh penggunaan filter:
  const numbers = [1, 2, 3, 4, 5];

        const evenNumbers = numbers.filter((number) => number % 2 === 0);

        console.log(evenNumbers); // Output: [2, 4]

Array di JavaScript juga memiliki beberapa properti, seperti:

- length: digunakan untuk mendapatkan jumlah elemen dalam array.

  Contoh penggunaan length:

        const numbers = [1, 2, 3, 4, 5];
        console.log(numbers.length); // Output: 5

- push: digunakan untuk menambahkan elemen baru ke akhir array.

  Contoh penggunaan push:

        const numbers = [1, 2, 3, 4, 5];
        numbers.push(6);
        console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

- pop: digunakan untuk menghapus elemen terakhir dari array.

  Contoh penggunaan pop:

        const numbers = [1, 2, 3, 4, 5];
        numbers.pop();
        console.log(numbers); // Output: [1, 2, 3, 4]

- splice: digunakan untuk menghapus, menambahkan, atau mengganti elemen di dalam array.

  Contoh penggunaan splice:

        const numbers = [1, 2, 3, 4, 5];
        numbers.splice(2, 1);
        console.log(numbers); // Output: [1, 2, 4, 5]

## **2. Object {}**

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) di JavaScript adalah tipe data yang digunakan untuk menyimpan nilai atau data dalam bentuk key-value. Key adalah nama yang diberikan untuk mengakses nilai dalam object.

Contoh penggunaan object:

        const product = {
        name: 'Iphone 14',
        brand: 'apple',
        condition: 'new',
        };

        //cara pengaksesan object
        console.log(product.name); // Output: Iphone 14
        //atau
        console.log(product['brand']); // Output: apple

## **3. Map & Set**

### Map

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) adalah salah satu struktur data baru di JavaScript yang digunakan untuk menyimpan data dalam bentuk key-value pair.

Cara membuat Map baru:

        const newMap = new Map();

Cara menambahkan data ke dalam Map:

        const map = new Map();
        map.set('key1', 'value1');
        map.set('key2', 'value2');

Cara mengakses data dari Map:

        const newMap = new Map();
        newMap.set('key1', 'value1');
        newMap.set('key2', 'value2');

        console.log(newMap.get('key1')); // Output: "value1"
        console.log(newMap.get('key2')); // Output: "value2"

Beberapa method penting yang dimiliki Map adalah:

- set(key, value): digunakan untuk menambahkan data baru ke dalam Map.
- get(key): digunakan untuk mengakses data dari Map berdasarkan key-nya.
- has(key): digunakan untuk mengecek apakah sebuah key sudah ada di dalam Map.
- size: digunakan untuk mendapatkan jumlah data dalam Map.

### Set

[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) adalah struktur data di JavaScript yang digunakan untuk menyimpan data dalam bentuk unik dan tidak berurutan. Data yang disimpan di dalam Set bisa berupa tipe data apa saja.

Cara membuat Set baru:

        const newSet = new Set();

Cara menambahkan data ke dalam Set:

        const mySet = new Set();
        mySet.add('data1');
        mySet.add('data2');
        mySet.add('data3');

Cara mengakses data dari Set:

        const mySet = new Set();
        mySet.add('data1');
        mySet.add('data2');
        mySet.add('data3');

        console.log(mySet.has('data1')); // Output: true
        console.log(mySet.has('data4')); // Output: false

Beberapa method penting yang dimiliki Set adalah:

- add(value): digunakan untuk menambahkan data baru ke dalam Set.
- has(value): digunakan untuk mengecek apakah sebuah data sudah ada di dalam Set.
- delete(value): digunakan untuk menghapus sebuah data dari Set.
- size: digunakan untuk mendapatkan jumlah data dalam Set.
