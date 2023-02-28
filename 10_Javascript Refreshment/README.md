# **(10) Javascript Refreshment**

[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) adalah bahasa pemrograman yang _[high level](https://en.wikipedia.org/wiki/High-level_programming_language), [scripting](https://en.wikipedia.org/wiki/Scripting_language), [untyped](https://fosterv222.medium.com/coding-languages-typed-vs-untyped-d29c7e0b3713),_ dan _[interpreted](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/)_.

Berikut adalah **3 Point** dari materi [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) **‼️**

## **1. Var 🆚 Let 🆚 Const**

Terdapat tiga cara untuk deklarasi variable di Javascript, yakni dengan menggunakan var, let, dan const seperti contoh berikut.

        //dengan var
        var a = 1;
        //dengan let
        let b = 2;
        //dengan const
        const c = 3;

- Penggunaan var hendak **dihindari❗**, sebisa mungkin jangan digunakan kecuali mengelola _legacy code_ ataupun kode yang memang memerlukan **(sangat jarang)**.
- Gunakan let jika membutuhkan nilai variable yang berubah-ubah.
- Gunakan const jika membutuhkan nilai yang bersifat tetap (tidak dapat di-_reasign_). Nilai dari variable const harus diberikan saat deklarasi.

## **2. Scoping**

- Variable scoping dalam JavaScript mengacu pada aturan yang mengatur di mana variabel dapat diakses dalam program. Di JavaScript, ada dua jenis variable scoping yaitu _local scoping_ dan _global scoping_.

- _Local scoping_ berarti variabel hanya dapat diakses di dalam blok kode tempat mereka dideklarasikan. Sedangkan, _global scoping_ berarti variabel dapat diakses dari mana saja dalam program.

Contoh code sederhana:

    // Global scoping
    let globalVariable = "Saya adalah variabel global";

    function printGlobalVariable() {
      console.log(globalVariable);
    }

    printGlobalVariable(); // Output: Saya adalah variabel global

    // Local scoping
    function printLocalVariable() {
      let localVariable = "Saya adalah variabel lokal";
      console.log(localVariable);
    }

    printLocalVariable(); // Output: Saya adalah variabel lokal
    console.log(localVariable); // Output: ReferenceError: localVariable is not defined

- Dalam contoh di atas, globalVariable adalah variabel global yang dapat diakses dari mana saja dalam program. Sementara localVariable adalah variabel lokal yang hanya dapat diakses di dalam fungsi printLocalVariable(). Jika kita mencoba mengakses variabel localVariable di luar fungsi, akan menghasilkan _ReferenceError_ karena variabel tersebut tidak dapat diakses dari luar blok tempat ia dideklarasikan.

## **3. Values & References**

_Datatype_ pada JavaScript dapat dibagi menjadi 2, yakni _primitives_ dan _object_.

- _Primitive_ berarti tipe data tersebut merupakan unit pemrosesan terkecil dan element yang paling sederhana dalam bahasa pemrogramman. Contohnya string, boolean, number, BigInt, undefined, null, dan symbol.
- _Object_ adalah unit yang berisikan property dan method, Contohnya object, array, function, date, set, map, weak map, weak set.

Jika kita ingin meneruskan nilai, semua nilai primitif dalam javascript diteruskan oleh nilai.

Contoh _code_:

    //Menerutkan nilai variable a ke b
    let a = 1;
    let b = a;
    console.log(b); // Output: 1
    b = 2;
    console.log(a); // Output: 1
    console.log(b); // Output: 2

- Perhatikan bahwa pada nilai primitif, jika kita mengubah nilai variable b, variable a tidak ikut berubah. Karena yang diteruskan dari a ke b adalah **nilainya**;

Pada tipe data object, yang diteruskan adalah reference, jika kita meneruskan reference maka akan tetap memberikan reference yang sama.

    let arrA = [1, 2, 3, 4];
    let arrB = arrA;
    console.log(arrB); //Output: [1, 2, 3, 4]
    arrB[2] = 2;
    console.log(arrA); //Output: [1, 2, 2, 4]
    console.log(arrB); //Output: [1, 2, 2, 4]

- Perhatikan pada kasus di atas, kita meneruskan reference yang berarti apabila kita mengubah nilai pada index di array b, maka nilai pada index di array a juga ikut berubah karena mengacu pada _reference_ yang sama.

"_Lalu bagaimana caranya untuk salin nilainya dan membuat array atau object baru?_"

Pada JavaScript, kita dapat menyalin value dari array ataupun object dengan dua cara yakni dengan _destructuring_ dan _spread syntax_ ✨

- _Destructuring_ adalah ekspresi pada JavaScript untuk menyalin nilai pada array atau property dalam object ke dalam variable lain.
- _Spread syntax_ (...) digunakan ketika ingin mengambil semua nilai dari array atau property dari object ke dalam daftar, biasanya array atau object baru.

Contoh _code_ sederhananya.

    //Destructuring
    //Array
    let list = [1, 2, 3];
    let [a, b] = list;
    console.log(a); //Output: 1
    console.log(b); //Output: 2
    [a, , b] = list; //cara skip index
    console.log(a); //Output: 1
    console.log(b); //Output: 3

    //Object
    const product = {
      name: 'Iphone12',
      price: '1500',
      status: true,
    };
    const { name, status } = product; // nama variable harus sama dengan nama property
    const { name: productName, price: productPrice } = product; //jika ingin ubah nama variable
    console.log(name);//Output: Iphone12
    console.log(status);//Output: true
    console.log(productName);//Output:Iphone12
    console.log(productPrice);//Output: true

    //Spread Syntax
    //Array
    let a = [1,2,3,4]
    let b = [...a]
    let c = [...b, 5]
    console.log(b) //Output: [1,2,3,4]
    console.log(c) //Output: [1,2,3,4,5]

    //Object
    let product = {
    name: "Iphone 14",
      price: "1000"
    }
    let product2 = {
      ...product,
      description: "Brand new"
    };
    console.log(product2) /*Output: {
                          description: "Brand new"
                          name: "Iphone 14"
                          price: "1000"
                          }
                          */

- _Spread syntax_ melakukan _deep copies_ dari data apabila data tersebut tidak nested. **Jika data nested, maka _spread syntax_ akan melakukan _deep copy_ dari data teratas dan melakukan _shallow copy_ dari nested data**.

  Contoh kasus & penjelasan:

      let a = {
        name: {
          firstName: 'Agus',
          lastName: 'BW',
        },
        gender: 'male',
      };
      let b = {
        ...a,
        age: 20,
      };

      //nested data
      b.name.lastName = 'Budhiarta';
      console.log(a.name.lastName); //Output: Budhiarta
      console.log(b.name.lastName); //Output: Budhiarta

      //data teratas (top most data)
      b.gender = "man";
      console.log(a.gender); //Output: male
      console.log(b.gender); //Output: man

      //cara spread agar semua deep copy (beda reference)
      let c = {
        ...a, age:20
      }
      //lakukan spread pada nested datanya juga
      c.name = {...a.name};
      c.name.firstName = "Nyoman";
      console.log(c.name.firstName); //Output: Nyoman
      console.log(a.name.firstName); //Output: Agus

Learning source: https://developer.mozilla.org/en-US/docs/Web/JavaScript
