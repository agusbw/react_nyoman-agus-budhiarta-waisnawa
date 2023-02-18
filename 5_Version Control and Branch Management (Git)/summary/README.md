# **(5) Version Control and Branch Management**

Berikut adalah **3 Point** dari materi Version Control and Branch Management

## **1. Version Control System**

Version control system adalah sebuah tools yang digunakan untuk melakukan tracking terhadap perubahan suatu project. Perkembangan version control system diawali dari single user contohnya SCCS, dilanjutkan oleh centralized contohnya CVS, dan dikembangkan lagi menjadi distributed contohnya Git yang marak digunakan saat ini. Git adalah salah satu version control system yang digunakan para developer untuk membantu tracking perubahan dalam kolaborasi pengembangan software.

- Git bersifat terdistribusi bukan tersentralisasi
- Cara kerja kolaborasi dengan Git adalah setiap developer menjadikan sebuah remote server sebagai pusat dimana setiap project developer harus sinkron ke git remote server, contoh remote servernya adalah github. Setiap lokal sistem mempunyai git repository (folder project) yang berisikan file-file project dan history perubahan. Nantinya setiap perubahan atau commit git ini akan dikirimkan ke remote server.
- Github memiliki 2 tipe repository, yakni public (dapat diakses semua orang), private (bersifat privat).
- Pada pembuatan repository github terdapat 2 file yang bisa ditambahkan yakni file README yang berfungsi untuk menambahkan deskripsi project dan juga file .gitignore yang bertujuan untuk mengignore file lokal yang kita tidak ingin upload ke github.
- Kita juga bisa menambahkan license untuk mengatur license dari repository.

## **2. Git Command**

Berikut adalah beberapa git command.

- git remote add : untuk melakukan remote ke git remote server (github).
- git add <directory>: untuk memindahkan fase project dari working directory ke staging area.
- git commit -m “<pesan commit>”: menjadikan staging area menjadi sebuah commit, command git commit sebaiknya diisikan pesan commit yang jelas.
- git status: melihat status project, misalnya terdapat perubahan pada working direcctory yang belum distaging, ataupun melihat perubahan yang siap untuk di commit.
- git diff: melihat detail perubahan dari project.
- git stash: menyimpan perubahan ke stash area.
- git stash apply: mengembalikan yang disimpan di stash area.
- git push origin <branch>: melakukan push project/mengirim commit ke repository remote server (github).
- git log: melihat history commit
- git reset <commit id> <opsi>: melakukan undo/pengembalian ke titik tertentu, terdapat 2 opsi yakni --soft yang mengembalikan perubahan tetapi perubahan tetap tertracking di staging area, jika -- hard dilakukan pengembalian tanpa tracking.
- git fetch origin <branch>: mengambil data yang ada pada branch di dalam repository github, tetapi belum dimerge.
- git pull origin <branch>: mengambil data yang ada pada branch misalnya master selanjutnya di merge kedalam branch kita.
- git branch <nama _branch>: menambah branch.
- git branch - -list: melihat list branch.
- git branch -D <nama_branch>: delete branch.
- git merge: terdapat 2 flag yakni fast forward (graph dijadikan 1 line ) dan no fast forward (graph masih terlihat cabangnya).

## **3. Gitflow**

Melakukan semua perubahan, penambahan fitur, dan lain sebagainya di branch main/master bukan best practice. Branch main biasanya hanya berisikan kode yang sudah fix. Branch utama untuk melakukan pengembangan menggunakan branch development yang nantinya memiliki childbranch untuk masing-masing fiturnya.
