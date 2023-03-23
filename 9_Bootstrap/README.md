# **(9) Bootstrap**

[Bootstrap](https://getbootstrap.com/) adalah CSS Framework yang digunakan untuk membuat tampilan website yang cepat dan responsif.

Berikut adalah **3 Point** dari materi Bootstrap **‼️**

## **1. Bootstrap 🆚 Vanilla CSS**

- Bootstrap memiliki kumpulan komponen-komponen (seperti tombol, form, navigasi, dll.) dan gaya-gaya _default_ yang sudah siap digunakan, sedangkan Vanilla CSS adalah _style_ CSS biasa yang ditulis sendiri.

- Bootstrap memungkinkan pengguna untuk membuat tampilan yang responsif dan dapat disesuaikan untuk berbagai perangkat dengan lebih mudah tanpa harus melakukan _media query_ manual sendiri.

- Bootstrap memiliki banyak plugin yang dapat digunakan untuk memperluas fungsionalitasnya, sedangkan Vanilla CSS hanya dapat digunakan untuk membuat tampilan saja.

- Bootstrap menerapkan _grid system_ yang dapat digunakan untuk membuat _layout_ dengan mudah, sedangkan Vanilla CSS harus membuat _layout_ dari awal.

## **2. Fitur Bootstrap**

Bootstrap biasanya dimanfaatkan untuk pembuatan _layout_ website agar fase _development_ menjadi lebih cepat. Hal ini dikarenakan bootstrap menerapkan [_bootstrap grid system_](https://getbootstrap.com/docs/5.3/layout/grid/#example).

_Bootstrap grid system_ digunakan untuk membuat _layout_ yang responsif. _Grid system_ menggunakan konsep grid yang terdiri dari 12 kolom dengan lebar yang sama. Kolom ini nantinya dapat diatur dan dikombinasikan sehingga dapat menciptakan _layout_ yang kompleks.

Adapun fitur utama lain dari bootstrap adalah:

- **CSS Styling** Kita dapat melakukan styling dengan bantuan _utility class_.

      <p class="text-primary">Hello Alterra!</p>

  Dengan kode diatas, kita sudah dapat memberikan _font color_ pada element tanpa menyentuh file CSS.

- **Komponen UI** Bootstrap menyediakan berbagai komponen UI yang siap pakai, seperti dropdown, navbar, carousel, modal, dan sebagainya. Penggunaannya hanya dengan menambahkan kelas CSS tertentu untuk memunculkan komponen tersebut pada halaman web.

      <button class="btn btn-primary">Click me!</button>

  Kode diatas sudah cukup untuk memunculkan sebuah komponen button siap pakai🌈.

- **JavaScript Plugin** Bootstrap menyediakan berbagai plugin JavaScript yang siap pakai, seperti tooltip, popover, collapse, dan sebagainya. Plugin tersebut dapat digunakan agar website lebih interaktif

## **3. CSS Preprocessor**

Salah satu kekurangan penggunaan bootstrap adalah tampilan website yang mirip dengan website lainnya, UI pada website yang menggunakan framework bootstrap cenderung mirip dikarenakan menggunakan pedoman design pattern yang sama.

Untuk mengkustomisasi komponen bootstrap kita, kita dapat menggunakan [CSS Preprocessor](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)💫💫

_"Apa sih CSS Preprocessor❓"_

Perhatikan kode CSS ini!

    $primary-color: #007bff;

    .btn {
      background-color: $primary-color;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
    }

Kode diatas merupakan contoh dari penggunaan CSS Preprocessor [**Sass**](https://sass-lang.com/).

CSS Preprocessor adalah program yang digunakan untuk membantu dalam pengembangan CSS dengan cara menambahkan fitur-fitur yang tidak tersedia pada CSS standar.

CSS Preprocessor bekerja dengan memproses kode CSS yang ditulis dan mengubahnya menjadi kode CSS standar yang dapat dijalankan oleh browser.

Framework Bootstrap sendiri menggunakan [**Sass**](https://sass-lang.com/) sebagai CSS preprocessor, dan menyediakan file-file **Sass** yang dapat kita modifikasi sesuai kebutuhan kita. Dengan menggunakan Sass pada Bootstrap, kita dapat mengubah tampilan komponen-komponen Bootstrap secara mudah dan cepat, karena kita dapat menggunakan variabel dan mixin yang telah disediakan oleh Bootstrap.
