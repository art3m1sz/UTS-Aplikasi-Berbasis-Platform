# E-Learning Mobile Application

Aplikasi mobile e-learning yang dikembangkan menggunakan **React
Native**, **Expo**, dan **Expo Router**. Proyek ini berfokus pada
implementasi antarmuka (UI) dan alur navigasi untuk membantu mahasiswa
mengakses informasi pembelajaran melalui perangkat mobile.

> **Project status:** UI prototype / frontend implementation. Beberapa
> interaksi masih menggunakan data dummy dan belum terhubung ke backend
> atau database.

------------------------------------------------------------------------

## Daftar Isi

-   [Tentang Proyek](#tentang-proyek)
-   [Fitur Aplikasi](#fitur-aplikasi)
-   [Teknologi yang Digunakan](#teknologi-yang-digunakan)
-   [Struktur Navigasi](#struktur-navigasi)
-   [Struktur Direktori](#struktur-direktori)
-   [Desain Antarmuka](#desain-antarmuka)
-   [Persyaratan](#persyaratan)
-   [Instalasi dan Menjalankan
    Proyek](#instalasi-dan-menjalankan-proyek)
-   [Status Implementasi](#status-implementasi)
-   [Pengembangan Selanjutnya](#pengembangan-selanjutnya)
-   [Lisensi dan Atribusi](#lisensi-dan-atribusi)
-   [Kontributor](#kontributor)

------------------------------------------------------------------------

## Tentang Proyek

E-Learning Mobile Application dirancang sebagai antarmuka pembelajaran
digital yang menyediakan akses ke informasi mata kuliah, materi, tugas,
kalender akademik, dan profil pengguna.

Proyek ini dibuat untuk mengeksplorasi pengembangan aplikasi mobile
dengan React Native serta penerapan navigasi bertingkat menggunakan Expo
Router.

### Tujuan

-   Menyediakan tampilan mobile untuk informasi pembelajaran.
-   Mengorganisasi materi dan tugas berdasarkan mata kuliah.
-   Menampilkan status dan tenggat pengumpulan tugas.
-   Menyediakan alur antarmuka pengumpulan tugas.
-   Menerapkan navigasi yang konsisten dan mudah dipahami.

### Target Pengguna

Mahasiswa atau peserta didik yang membutuhkan akses praktis terhadap
informasi pembelajaran melalui smartphone.

------------------------------------------------------------------------

## Fitur Aplikasi

  -----------------------------------------------------------------------
  Halaman                             Deskripsi
  ----------------------------------- -----------------------------------
  Login                               Halaman awal untuk masuk ke
                                      aplikasi.

  Dashboard                           Halaman utama dan titik akses
                                      menuju fitur aplikasi.

  Calendar                            Tampilan kalender atau informasi
                                      jadwal pembelajaran.

  Courses                             Daftar mata kuliah, pencarian,
                                      serta filter Aktif, Selesai, dan
                                      Favorit.

  Course Materials                    Informasi mata kuliah dan daftar
                                      materi pembelajaran.

  Course Assignments                  Daftar tugas, bobot nilai,
                                      deadline, status, dan informasi
                                      feedback.

  Assignment Submission               Antarmuka pengumpulan tugas, area
                                      unggah, komentar, dan konfirmasi
                                      integritas akademik.

  Submission Success                  Konfirmasi tampilan setelah alur
                                      pengumpulan tugas selesai, beserta
                                      ringkasan bukti pengumpulan.

  Profile                             Informasi profil dan pilihan
                                      pengaturan akun.
  -----------------------------------------------------------------------

**Catatan:** Keberadaan tampilan suatu fitur tidak berarti seluruh
prosesnya sudah terhubung ke layanan backend. Lihat bagian [Status
Implementasi](#status-implementasi).

------------------------------------------------------------------------

## Teknologi yang Digunakan

  --------------------------------------------------------------------------------------------
  Teknologi / Library                                      Kegunaan
  -------------------------------------------------------- -----------------------------------
  [React Native](https://reactnative.dev/)                 Framework untuk membangun antarmuka
                                                           aplikasi mobile.

  [Expo](https://expo.dev/)                                Tooling dan development platform
                                                           untuk React Native.

  [Expo                                                    File-based routing dan navigasi
  Router](https://docs.expo.dev/router/introduction/)      aplikasi.

  [Expo                                                    Memuat custom font ke dalam
  Font](https://docs.expo.dev/versions/latest/sdk/font/)   aplikasi.

  [Lucide](https://lucide.dev/)                            Ikon antarmuka.

  JavaScript / JSX                                         Bahasa dan sintaks implementasi
                                                           komponen.
  --------------------------------------------------------------------------------------------

### Tipografi

Font yang digunakan dalam proyek:

-   **Plus Jakarta Sans** --- Regular, Medium, SemiBold, dan Bold.
-   **Corinthia** --- Regular dan Bold.

File font disimpan di direktori `assets/fonts/` dan dimuat menggunakan
`expo-font`.

------------------------------------------------------------------------

## Struktur Navigasi

Aplikasi menggunakan kombinasi **Stack Navigation** dan **Bottom Tab
Navigation** melalui Expo Router.

### Bottom Tab Navigation

Navigasi utama terdiri dari:

1.  Dashboard
2.  Calendar
3.  Courses
4.  Profile

### Stack dan Nested Routes

Stack digunakan untuk berpindah ke halaman detail dan halaman lanjutan,
misalnya dari daftar mata kuliah ke materi, tugas, dan pengumpulan
tugas.

``` text
Root Stack (login)
└── ├── Dashboard
    ├── Calendar
    ├── Courses
    │   └── Course Detail
    │       ├── Materials
    │       ├── Assignments
    │       │   ├── Submission
    │       │   └── Success
    │       └── Forum
    └── Profile
```

Struktur aktual route mengikuti file dan folder di dalam direktori
`app/`.

------------------------------------------------------------------------

## Struktur Direktori

Berikut gambaran struktur direktori yang digunakan sebagai acuan.
Sesuaikan jika struktur lokal proyek mengalami perubahan.

``` text
project-root/
├── app/
│   ├── _layout.js
│   ├── index.js
│   ├── login.js
│   └── (tabs)/
│       ├── _layout.js
│       ├── index.js
│       ├── calendar.js
│       ├── profile.js
│       └── courses/
│           ├── index.js
│           └── [courseId]/
│               ├── _layout.js
│               ├── index.js
│               ├── forum.js
│               └── assignments/
│                   ├── index.js
│                   ├── submission.js
│                   └── success.js
├── assets/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── BottomNavigation.js
│   │   └── CourseDetailLayout.js
│   └── screens/
│       ├── LoginScreen.js
│       ├── DashboardScreen.js
│       ├── CalendarScreen.js
│       ├── CoursesScreen.js
│       ├── CourseMaterialsScreen.js
│       ├── CourseAssignmentsScreen.js
│       ├── AssignmentSubmissionScreen.js
│       ├── SubmissionSuccessScreen.js
│       ├── ProfileScreen.js
│       └── CourseForumScreen.js
├── package.json
└── README.md
```

File di dalam `app/` berfungsi sebagai route Expo Router. Implementasi
UI halaman dikelompokkan di dalam `src/screens/`, sedangkan komponen
yang digunakan kembali ditempatkan di `src/components/`.

------------------------------------------------------------------------

## Desain Antarmuka

### Color Palette

Warna berikut didokumentasikan dari nilai yang telah diidentifikasi pada
komponen aplikasi. Penggunaan warna dapat berbeda sesuai konteks
komponen.

  -----------------------------------------------------------------------
  Nama                    Hex                     Penggunaan
  ----------------------- ----------------------- -----------------------
  Primary                 `#002448`               Tombol utama dan elemen
                                                  penting yang
                                                  menggunakan warna ini.

  Secondary               `#002F87`               Navigasi aktif pada
                                                  Bottom Navigation.

  Background              `#FFFFFF`               Latar belakang Bottom
                                                  Navigation / komponen
                                                  yang menggunakan warna
                                                  putih.

  Primary Text            `#25282D`               Judul materi dan teks
                                                  utama.

  Secondary Text          `#68758A`               Deskripsi dan informasi
                                                  pendukung.

  Muted                   `#858B96`               Ikon dan teks navigasi
                                                  nonaktif.

  Border                  `#DDE1E8`               Garis pembatas dan
                                                  outline komponen.
  -----------------------------------------------------------------------

### Shadow / Elevation

Efek kedalaman komponen menggunakan properti `elevation` React Native.
Karena efek tersebut bukan warna Hex tersendiri, shadow tidak dimasukkan
sebagai token warna.

------------------------------------------------------------------------

## Persyaratan

Sebelum menjalankan proyek, pastikan perangkat pengembangan sudah
memiliki:

-   Node.js versi yang kompatibel dengan versi Expo pada proyek.
-   npm atau package manager lain yang sesuai dengan lockfile proyek.
-   Expo CLI melalui `npx expo`.
-   Android Emulator, iOS Simulator (pada macOS), atau aplikasi Expo Go
    yang kompatibel.

> Versi dependency yang sebenarnya mengikuti konfigurasi di
> `package.json` dan lockfile proyek.

------------------------------------------------------------------------

## Instalasi dan Menjalankan Proyek

### 1. Clone repository

``` bash
git clone <URL_REPOSITORY>
cd <NAMA_FOLDER_PROYEK>
```

Ganti `<URL_REPOSITORY>` dengan URL repository GitHub dan
`<NAMA_FOLDER_PROYEK>` dengan nama direktori hasil clone.

### 2. Install dependencies

``` bash
npm install
```

### 3. Jalankan Expo development server

``` bash
npx expo start
```

### 4. Buka aplikasi

Pilih salah satu cara berikut:

-   Scan QR code menggunakan Expo Go jika environment dan versi Expo Go
    kompatibel.
-   Tekan `a` untuk menjalankan melalui Android Emulator.
-   Tekan `i` untuk menjalankan melalui iOS Simulator pada macOS.

Jika mengalami masalah cache setelah mengubah struktur route, jalankan:

``` bash
npx expo start -c
```

------------------------------------------------------------------------

## Status Implementasi

Proyek saat ini berfokus pada implementasi UI dan navigasi dengan data
dummy.

  -----------------------------------------------------------------------
  Fitur                               Status / Keterangan
  ----------------------------------- -----------------------------------
  Halaman Login                       UI tersedia; autentikasi backend
                                      belum terintegrasi.

  Dashboard                           UI tersedia.

  Calendar                            UI tersedia.

  Courses                             UI, pencarian, dan filter dengan
                                      data aplikasi.

  Course Materials                    UI tersedia.

  Course Assignments                  UI daftar tugas dan status.

  Assignment Submission               UI form pengumpulan tersedia;
                                      file picker dan upload backend
                                      belum terintegrasi.

  Submission Success                  UI konfirmasi tersedia; unduh bukti
                                      PDF masih UI-only.

  Profile                             UI tersedia; edit profil, share,
                                      dan change password masih UI-only.

  Backend dan Database                Belum menjadi bagian implementasi
                                      saat ini.
  -----------------------------------------------------------------------

Status ini menjelaskan batasan prototipe agar pengguna repository tidak
menganggap seluruh fungsi sudah siap digunakan secara produksi.

------------------------------------------------------------------------

## Pengembangan Selanjutnya

Beberapa pengembangan yang dapat dilakukan:

-   Integrasi autentikasi dan manajemen sesi pengguna.
-   Integrasi backend dan database untuk data mahasiswa, mata kuliah,
    materi, dan tugas.
-   Implementasi pemilihan serta unggah file tugas.
-   Implementasi unduh bukti pengumpulan dalam format PDF.
-   Implementasi edit profil dan pengaturan akun.
-   Implementasi forum diskusi dan feedback tugas secara dinamis.

------------------------------------------------------------------------

## Lisensi dan Atribusi

Proyek ini menggunakan framework, library, ikon, dan font pihak ketiga.
Penggunaan masing-masing aset harus mengikuti lisensi dari penyedia
resminya.

-   React Native: https://github.com/facebook/react-native
-   Expo: https://github.com/expo/expo
-   Expo Router: https://github.com/expo/expo
-   Lucide: https://github.com/lucide-icons/lucide
-   Plus Jakarta Sans: https://github.com/tokotype/PlusJakartaSans
-   Corinthia: https://github.com/googlefonts/corinthia



------------------------------------------------------------------------

## Kontributor

**Nama:** I Gusti Ngurah Arya Phalguna Abhimantra Putra, Komang Santika Juliartha
**Institusi:** ITB STIKOM Bali

------------------------------------------------------------------------