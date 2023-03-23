# **(7) HTML**

_"Apasih itu HTML?"_. [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) **bukan** bahasa pemrogramman, HTML _(Hypertext Markup Language)_ adalah bahasa markup yang merupakan standar untuk pembuatan kerangka web.

Berikut adalah **3 Point** dari materi HTML **!!!**

## **1. Tag**

Perhatikan _block code_ dibawah :

    <html>
      <body>
        <p>Hello World</p>
      </body>
    </html>

_Block code_ di atas adalah contoh dari penulisan HTML, perhatikan bahwa terdapat tag _html, body, dan p_. Pada penulisan HTML, kita akan banyak menggunakan tag yang memiliki fungsinya masing-masing. Dalam HTML, tag adalah sebuah penanda awalan dan akhiran dari sebuah element di HTML.

Apa saja sih tag yang ada di HTML? Bisa dilihat [disini](https://www.w3schools.com/tags/)

Terdapat beberapa **tag wajib** dalam penulisan HTML, yakni:

- <!DOCTYPE html> — Untuk mendeklarasikan type dokumen.
- <html> — Tag utama dari dokumen HTML.
- <head> — Penanda bagian head dari dokumen.
- <title> — Untuk mengubah judul halaman web.
- <body> — Penanda bagian body dari dokumen.

**Note: Tag HTML biasanya terdiri dari tag pembuka dan penutup, tetapi ada juga tag yang tidak memerlukan tag penutup**

## **2.Attribute**

Perhatikan _block code_ dibawah :

      <input type="text" id="fname" name="fname">

Pada block code di atas, terdapat **3 _Attributes_** yakni, _type_, _id_, dan _name_. _Attribute_ dapat dikatakan sebagai sebuah tambahan argumen terhadap suatu tag atau elemen HTML. Argumen ini memberikan informasi tambahan kepada elemen tersebut.

Pada _block code_ di atas _attribute_-nya berfungsi sebagai berikut.

- type="text" : memberikan informasi bahwa tag input tersebut menerima input bertipe text.
- id="fname" : memberikan informasi bahwa tag input tersebut memiliki id "fname" yang dapat digunakan sebagai [_selector_](https://www.w3schools.com/cssref/css_selectors.php).
- name="fname" : memberikan informasi bahwa tag input tersebut memiliki name "fname" yang merupakan nama dari data apabila form telah dikirim.

**Note: Attribute hanya ditulis pada tag pembuka**

## **3. Custom Element dan Attribute**

### Custom Element

Selain tag yang disediakan oleh HTML, kita juga dapat membuat custom tag sesuai dengan yang kita ingin. Hal ini kita dapat capai dengan "Custom Elements"
Beberapa hal yang perlu diperhatikan dalam pembuatan _custom tag_:

- Pastikan nama tag unik dan tidak konflik dengan tag HTML yang sudah ada.
- Kita memerlukan JavaScript untuk mengatur prilaku dari tag yang kita buat
  Belajar lebih lanjut mengenai [_custom element_](https://medium.com/technofunnel/create-custom-html-element-without-any-frontend-framework-html5-6e78ada50162)!

Contoh _custom element_:

        <body>
          <custom-card></custom-card>
        </body>

### Custom Attribute

Selain _custom element_, kita juga dapat membuat _custom attribute_ di HTML. _Custom attribute_ ini adalah _attribute_ selain _attribute_ standar HTML. Custom \_attribute_ini digunakan untuk menambahkan informasi ke dalam element HTML.

Custom _attribute_ biasanya dikenal sebagai data _attribute_. Penamaan _custom attribute_ biasanya di awali dengan prefix **data-** pada nama _attribute_-nya.

Seperti contoh berikut:

        <element data-*="value">

Untuk pengaksesan _value_ dari _attribute_, kita dapat menggunakan bantuan JavaScript. [Selengkapnya](https://www.geeksforgeeks.org/what-are-custom-attributes-in-html5/).
