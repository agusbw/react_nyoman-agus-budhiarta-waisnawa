# **(8) CSS**

[CSS _(Cascading Style Sheet)_](<https://en.wikipedia.org/wiki/CSS#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,Web%2C%20alongside%20HTML%20and%20JavaScript.>) adalah bahasa pemrograman yang digunakan untuk mengatur tampilan visual dari halaman web, sehingga dapat membuat tampilan yang konsisten dan menarik bagi pengguna.

Berikut adalah **3 Point** dari materi CSS **‼️**

## **1. CSS Selector & Specificity**

CSS Selector sederhananya adalah cara untuk menemukan dan memilih elemen HTML yang ingin kita _styling_ dengan CSS.

Perhatikan _code_ berikut!

    /* Selector elemen */
    h1 {
      color: blue;
    }

    /* Selector kelas */
    .text-blue {
      color: blue;
    }

    /* Selector ID */
    #header {
      background-color: gray;
    }

Kode CSS diatas menunjukkan macam-macam selector yang ada dalam CSS.

Setiap selector tersebut memiliki "kekuatannya" masing-masing. Kekuatan selector akan menentukan gaya yang akan digunakan pada elemen HTML yang dipilih. Hal ini disebut juga dengan istilah [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

[CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) berfungsi ketika terdapat dua atau lebih CSS Selector yang mentarget element yang sama. Ketika hal tersebut terjadi, CSS akan mengkalkulasikan berat dari masing-masing selector.

**Note: Selector yang lebih spesifik akan menimpa selector yang lebih umum.**

**HTML**

      <p id="welcome-text">Hallo alterra<p>

**CSS**

      p {
        font-size: 18px;
      }

      #welcome-text {
        font-size: 30px;
      }

Dengan kode CSS seperti diatas, element p akan memiliki _font size_ 30px dikarenakan selector ID lebih spesifik dari selector element. Untuk mempermudah perhitungan selector bisa gunakan [tools berikut⚒️](https://specificity.keegan.st/)

## **2. CSS Property dan Value**

**Property** adalah _style_ yang ingin kita terapkan pada sebuah element HTML dan **Value** adalah nilai dari property itu sendiri.

      #welcome-text {
        font-size: 30px;
      }

Pada contoh di atas, font-size disebut sebagai property dan 30px disebut sebagai value.

- CSS memiliki banyak property yang dapat kita atur nilainya yang secara lengkap dapat kita lihat [pada dokumentasi📖.](https://developer.mozilla.org/en-US/docs/Web/CSS)

## **3. Vendor Prefix**

Vendor prefix dalam CSS adalah awalan kode yang digunakan pada properti CSS, seperti "-webkit-", "-moz-", "-ms-", dan "-o-", untuk menunjukkan bahwa properti tersebut masih dalam tahap eksperimental dan belum sepenuhnya didukung oleh semua browser.

Hal ini dibutuhkan karena beberapa fitur CSS mungkin masih dalam tahap uji coba dan belum menjadi bagian dari spesifikasi resmi CSS. Oleh karena itu, vendor prefix digunakan oleh pengembang web untuk memastikan bahwa fitur tersebut tetap dapat digunakan pada browser yang mendukung, meskipun belum sepenuhnya didukung oleh browser lain.

Contoh penggunaanya.

    .example {
      -webkit-filter: grayscale(50%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
              filter: grayscale(50%); /* FF 35+ */
    }

Namun, **perlu diingat** penggunaan vendor prefix harus dilakukan dengan hati-hati dan hanya untuk fitur-fitur yang memang diperlukan agar kode CSS tetap efisien✨ dan ngebut🚀.

Untuk mempermudah mengetahui property apa saja yang memerlukan vendor prefix bisa dilihat [disini](http://shouldiprefix.com/)
