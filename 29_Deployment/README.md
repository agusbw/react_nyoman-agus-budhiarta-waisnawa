# **(29) Deploment**

Berikut adalah **3 Point** dari materi Deployment **‼️**

## **1. Build React App**

Sebelum deployment, kita harus melakukan proses build pada aplikasi react kita.

### Apa itu build?

Build akan membuat versi production untuk aplikasi kita di folder build/. Proses build ini hanya diperlukan sebelum kita melakukan deploment ke produksi.

### Kenapa perlu build?

Secara default, react mengandung banyak pesan warning. Warning ini berguna untuk membantu developer pada saat mengembangkan aplikasi react. Namun, pada saat production, warning ini hendaknya dihilangkan, salah satunya karena akan membuat aplikasi react menjadi besar dan lambat. Oleh karena itu, sebelum melakukan deployment, aplikasi kita harus menggunakan versi produksi.

Dengan melakukan build, aplikasi kita akan menjadi versi production sehingga dapat meningkatkan performa dan mengurangi ukuran dari aplikasi.

## **2. Deployment**

Deployment adalah proses membuat aplikasi web tersedia bagi pengguna di internet. Dengan melakukan deployment, kita dapat membagikan website kita ke public sehingga aplikasi kita dapat diakses oleh orang diluar, tidak hanya oleh kita sendiri. Ada berbagai cara untuk melakukan deployment pada sebuah aplikasi web, tetapi metode yang paling umum adalah dengan hosting aplikasi pada sebuah server yang dapat diakses oleh pengguna.

Dalam deployment aplikasi React JS, terdapat beberapa opsi hosting yang dapat digunakan, seperti Netlify dan Vercel.

## **3. Deployment dengan Vercel**

[Vercel](https://vercel.com/), yang sebelumnya dikenal dengan now.sh, adalah sebuah platform cloud yang menyediakan cara yang mudah untuk melakukan deployment aplikasi web. Platform ini mendukung berbagai framework front-end, termasuk React JS.

Berikut ini adalah langkah-langkah yang perlu dilakukan untuk melakukan deployment aplikasi React JS dengan Vercel:

- Buat akun di Vercel.
- Buat proyek baru di Vercel.
- Sambungkan proyek dengan repositori GitHub atau upload file kita secara manual.
- Pilih branch yang akan di-deploy dan konfigurasi pengaturan untuk deployment kita.
- Lakukan deployment proyek ke Vercel.
- Setelah proyek di-deploy, kita dapat mengaksesnya melalui URL yang diberikan oleh Vercel. Kita juga dapat mengkonfigurasi dengan custom domain dan sertifikat SSL untuk membuat aplikasi lebih aman dan mudah diakses.

Selain itu, Vercel juga menyediakan berbagai fitur yang berguna untuk deployment aplikasi, seperti Environment Variables, Serverless Functions, dan banyak lagi. Sehingga kita sebagai developer dapat menyesuaikan deployment aplikasi sesuai dengan kebutuhan kita dengan menggunakan fitur-fitur tersebut.
