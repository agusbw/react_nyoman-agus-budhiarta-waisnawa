# **(25) Authentication in React**

Berikut adalah **3 Point** dari materi Authentication in React **‼️**

## **1. Authentication**

Authentication adalah proses verifikasi user atau user yang mengakses aplikasi kita. Dalam konteks aplikasi web, authentication sering digunakan untuk memastikan bahwa hanya user yang diizinkan yang dapat mengakses fitur dan informasi tertentu dalam aplikasi. Authentication biasanya dilakukan dengan menggunakan kombinasi username dan password, tetapi bisa juga menggunakan metode autentikasi lainnya seperti autentikasi token.

Dengan menerapkan authentication, kita dapat melindungi akses resource pada website kita hanya untuk user yang terautentikasi.

## **2. Metode Authentication**

Berikut adalah metode autentikasi yang bisa diterapkan:

- Basic Authentication:

  Metode authentication ini memerlukan user untuk memasukkan username dan password yang valid untuk mengakses halaman atau fitur tertentu dalam aplikasi. Informasi ini kemudian akan disimpan dan diverifikasi di server. Metode ini relatif sederhana dan umum diimplementasikan.

- Token-Based Authentication:

  Metode authentication ini melibatkan pengiriman token yang dihasilkan oleh server (dapat berupa JWT) ke client setelah setelah user berhasil login. Token ini kemudian akan digunakan untuk memverifikasi identitas user setiap kali user mengakses halaman atau fitur tertentu dalam aplikasi. Keuntungan dari metode ini adalah token biasanya sudah dienkripsi dan sehingga sulit untuk diambil pihak yang tidak berwenang, sehingga relatif lebih aman dibandingkan dengan metode basic authentication.

- OAuth:

  Pada website biasanya kita menemukan _login with google_, ini merupakan contoh OAuth, metode authentication ini memungkinkan user untuk melakukan login ke aplikasi menggunakan akun yang sudah ada di provider OAuth, seperti Google atau Github. Setelah user berhasil login, provider akan memberikan token yang akan digunakan oleh aplikasi untuk mengakses informasi user.

- Multi-Factor Authentication:
  Metode authentication ini melibatkan user untuk memberikan lebih dari satu jenis verifikasi identitas sebelum dapat mengakses halaman atau fitur tertentu dalam aplikasi. Contohnya adalah user harus memasukkan nama user dan kata sandi serta memberikan kode verifikasi yang dikirimkan ke nomor telepon atau email yang terdaftar pada akun user.

## **3. Token Based Authentication**

Token based authentication adalah salah satu metode autentikasi yang paling umum digunakan dalam aplikasi web modern. Pada metode ini, setelah user berhasil login, server akan memberikan sebuah token ke browser user. Token ini akan digunakan oleh browser untuk memverifikasi identitas user setiap kali user mengakses halaman yang membutuhkan autentikasi. Server juga dapat mengatur waktu kadaluwarsa token, sehingga token tidak akan berlaku setelah waktu tertentu

Di sisi client, token tersebut dapat disimpan umumnya pada cookies, dikarenakan pada cookies kita dapat melakukan setting expired date dari token tersebut. Token ini nantinya akan disertakan pada setiap melakukan HTTP Request ke server yang mana request tersebut memerlukan authorization.

Token akan disertakan pada header request, biasanya dengan metode Bearer token.

Materi lebih lanjut:

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
