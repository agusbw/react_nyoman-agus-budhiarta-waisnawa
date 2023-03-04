# **(12) Clean Code**

Clean code adalah istilah untuk **kode yang mudah dibaca, dipahami dan diubah oleh programer**

Berikut adalah **3 Point** dari materi clean code **‼️**

## **1. Kenapa Harus Menerapkan Clean Code?**

Kode yang dapat berjalan/_running_ tidak berarti kode itu adalah kode yang baik, kode yang baik adalah kode yang mudah dibaca, dimengerti, dan dimodifikasi.

Adapun manfaat dari penerapan cleancode adalah sebagai berikut.

- Work Collaboration🤝
  Tidak dipungkiri pada dunia kerja kita tidak akan bekerja sendiri, melainkan berkolaborasi secara tim. Bayangkan jika kode yang kita tulis tidak mampu dibaca oleh orang lain maka proses development pun akan melambat dikarenakan orang tersebut harus bertanya arti dari kode yang kita tulis.
- Feature Development⚙️

  Kode yang bersih dan terorganisir dapat memudahkan kita saat menambahkan fitur baru atau memodifikasi sebuah fitur. Clean code dapat meminimalisir kesalahan kode ataupun bug saat proses pengembangan fitur, dikarenakan kode yang ditulis sebelumnya sudah terorganisir dan tertulis secara baik dan mudah dipahami dalam pengembangan berikutnya.

- Faster Development🚀
  Clean code mempercepat waktu development dikarenakan dapat mengurangi waktu kita yang terbuang sia-sia untuk memahami code yang acak-acakan atau tidak jelas. Sehingga programmer bisa langsung fokus untuk mengerjakan fitur yang ingin dikembangkan. Clean code juga membuat proses debugging menjadi lebih cepat, kode yang terstruktur dengan baik dapat memudahkan programmer untuk menemukan dan memperbaiki bug pada kode.

## **2. Karakteristik Clean Code**

Berikut adalah **9** karakteristik dari **clean code**:

- Penamaan mudah dipahami

  Clean code harus mudah dipahami oleh pembaca dan pengguna, sehingga mereka dapat dengan mudah memahami tujuan dari kode dan bagaimana kode tersebut bekerja

  Contoh kode:

        // Variabel sulit dimengerti
        const a = 10;
        const b = 20;
        const c = a + b;

        // Variabel mudah dipahami
        const jumlahKaryawan = 10;
        const jumlahProduksi = 20;
        const totalProduksi = jumlahKaryawan + jumlahProduksi;

- Mudah dicari dan dieja

  Clean code harus mudah dicari dan dieja, sehingga pembaca dan pengguna dapat dengan mudah menemukan kode yang mereka cari dan mengidentifikasi apa yang sedang terjadi dalam kode.

- Singkat namun mendeskripsikan konteks

  Clean code harus singkat namun tetap dapat mendeskripsikan konteks kode dengan baik. Hal ini dapat dicapai dengan menggunakan nama fungsi dan variabel yang spesifik dan singkat namun tetap dapat menjelaskan apa yang sedang terjadi dalam kode.

- Konsisten

  Clean kode harus konsisten, contohnya konsisten dalam pemberian nama variable atau function.

  Contoh kode:

        //Tidak konsisten
        getUserName();
        getCustomerRecord();

        //Konsisten
        getUserName();
        getUserRecord();

- Hindari penambahan konteks yang tidak perlu

  Contoh kode:

        //Tidak clean code
        const product: {
            productName: 'Iphone',
            productCategory: 'smartphone'
        }
        //Clean code
        const product:{
            name: 'iphone',
            category: 'smartphone'
        }

- Penulisan komentar yang baik
  Tambahkan komentar pada code agar lebih mudah dipahami, komentar harus ditulis secukupnya dan mudah dimengerti.
- Good function

  Tulis fungsi dengan baik, jangan gunakan terlalu banyak argumen pada fungsi agar lebih mudah untuk digunakan

- Gunakan konvensi

  Untuk menerapkan clean code, kita dapat menggunakan konvensi yang sudah ada seperti [Airbnb Javascript Guide](https://github.com/airbnb/javascript).

- Formatting

  Perhatikan formatting dalam penulisan code, seperti baris kode yang berhubungan diletakkan berdekatan, dekatkan fungsi dengan penggunanya, perhatikan indentasi, dekatkan variable dengan penggunaannya, dan dapat memanfaaatkan bantuan formatting tools seperti prettier

## **2. KISS & DRY**

Clean code memiliki dua prinsip utama yaitu KISS _(Keep It Simple Stupid)_ dan DRY _(Don't Repeat Yourself)_:

- **KISS:** Prinsip ini mengajarkan untuk membuat kode semudah mungkin dan menghindari kompleksitas yang tidak perlu. Kode yang sederhana dapat memudahkan pemahaman dan pemeliharaan kode di masa depan.

  Contoh kode:

        // Kode yang kompleks
        function hitungGaji(pendapatan, tunjangan) {
        let total = 0
        for(let i=0; i<pendapatan.length; i++) {
            total += pendapatan[i] * tunjangan[i]
        }
        return total
        }

        // Kode yang simple
        function hitungGaji(pendapatan, tunjangan) {
        return pendapatan.reduce((total, gaji, index) => {
            return total + (gaji * tunjangan[index])
        }, 0)
        }

- **DRY:** Prinsip ini mengajarkan untuk menghindari duplikasi kode yang tidak perlu dan menggunakan fungsi atau modul yang dapat digunakan kembali (reusable). Kode yang tidak berulang-ulang dapat memudahkan pemeliharaan dan meminimalkan kesalahan.

  Contoh kode:

        //Tanpa DRY
        function hitungHargaBarangA(qty){
            const hargaSatuan = 1000;
            return qty * hargaSatuan;
        }

        function hitungHargaBarangB(qty) {
        const hargaSatuan = 2000;
        return qty * hargaSatuan;
        }

        //Dengan DRY
        function hitungHargaBarang(qty, hargaSatuan){
            return qty*hargaSatuan;
        }

  Bisa dilihat pada kode diatas, untuk menghitung harga barang A dan B kita perlu membuat 2 fungsi yang berbeda, padahal operasi yang dilakukannya sama, hanya berbeda harga satuan barangnya saja. Jika menerapkan prinsip DRY, kita bisa meminimalisir fungsi dengan hanya membuat 1 fungsi yang menerima parameter harga satuan sehingga dapat digunakan bahkan tidak hanya di kedua barang tersebut, tetapi juga barang lain.

**Sumber bacaan:** https://www.freecodecamp.org/news/clean-coding-for-beginners/
