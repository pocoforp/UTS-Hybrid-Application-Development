# EduLearn - Professional Learning Dashboard

**Nama**: Hastuardy Pandu Mahendra  
**NIM**: 2802423506  
**Mata Kuliah**: COMP6923051 - Hybrid Application Development  
**Tema**: Education  

---

## 🚀 Cara Menjalankan Aplikasi
1. Pastikan Anda telah menginstal Node.js dan aplikasi **Expo Go** (jika menggunakan *smartphone*).
2. Buka terminal/CMD, arahkan ke direktori proyek ini.
3. Jalankan perintah `npm install` untuk menginstal semua *dependencies*.
4. Jalankan perintah `npx expo start -c` untuk memulai Metro Bundler (dengan membersihkan *cache*).
5. Tekan **w** pada terminal untuk membuka aplikasi di Web Browser, atau *scan* QR Code yang muncul menggunakan aplikasi **Expo Go** di Android/iOS Anda.

---

## 💡 Jawaban Soal 6 (Poin F): Penjelasan Konsep React Native
React Native adalah *framework* mutakhir yang memungkinkan pengembangan aplikasi *mobile* lintas *platform* menggunakan JavaScript dan React. Alih-alih merender *web-view*, React Native menerjemahkan kode menjadi komponen *native* iOS dan Android yang sesungguhnya.

**3 Keunggulan Utama untuk Aplikasi Hybrid:**
1. **Code Reusability**: Satu basis kode (*single codebase*) dapat digunakan untuk merilis aplikasi di Android, iOS, dan bahkan Web, menghemat waktu serta biaya secara signifikan.
2. **Fast Refresh / Hot Reloading**: Mempercepat proses iterasi *developer* karena setiap perubahan baris kode (seperti warna atau *layout*) akan langsung direfleksikan di layar secara instan tanpa perlu mem-*build* ulang aplikasi dari awal.
3. **Native Performance**: Kinerja yang jauh melampaui aplikasi *hybrid* konvensional (seperti Cordova/Ionic) karena ia menggunakan elemen UI asli dari sistem operasi (*native rendering*).

**Implementasi Konsep dalam Aplikasi Ini:**
* **Komponen (Components):** UI dipecah menjadi komponen modular untuk *reusability*. Contohnya pembuatan `<CourseCard />` dan `<CustomButton />`.
* **Props:** Meneruskan data antar komponen. Pada aplikasi ini, data kelas dikirim melalui *props* `course={item}` dari layar Home menuju ke dalam kartu kursusnya.
* **State:** Mengelola data dinamis yang berubah-ubah menggunakan Hooks `useState`. Contohnya adalah penyimpanan teks `const [email, setEmail] = useState('');` di halaman autentikasi.
* **Navigasi:** Menggunakan pustaka `@react-navigation/stack` untuk perpindahan antar halaman (*Screen Routing*), misalnya menggunakan `navigation.navigate('Detail')` dari halaman Home ke Detail.

---

## 📊 Jawaban Soal 8 (Poin H): Analisis Kebutuhan

**1. Masalah & Target Pengguna:**
- **Masalah**: Para profesional dan pelajar seringkali kesulitan menemukan platform *edutech* yang memiliki antarmuka yang bersih (tidak *cluttered*), interaktif, dan langsung menyajikan informasi esensial (seperti silabus dan harga) tanpa langkah yang berbelit.
- **Target Pengguna**: Mahasiswa, pekerja profesional yang ingin *upskilling* (*Beginner* hingga *Advanced*), dan pencari kursus IT terkurasi.

**2. Kebutuhan Pengguna (Min. 5):**
1. Pengguna dapat masuk menggunakan email dan kata sandi dengan validasi keamanan.
2. Pengguna dapat mengeksplorasi daftar kelas unggulan yang disusun dalam format *grid* atau *list* yang rapi.
3. Pengguna dapat melihat informasi mendetail dari suatu kursus (harga, durasi, level, pengajar, dan deskripsi materi).
4. Pengguna dapat melihat data personal mereka di menu profil beserta opsi pengelolaan akun.
5. Pengguna dapat berinteraksi dengan aplikasi secara nyaman melalui animasi (*micro-interactions*) dan tombol yang responsif.

**3. Tabel Pemetaan Kebutuhan ke Layar:**

| Kebutuhan Pengguna | Layar (Screen) | Komponen Terkait |
| :--- | :--- | :--- |
| Autentikasi (Log In) | `AuthScreen.js` | `CustomInput`, `CustomButton`, `KeyboardAvoidingView` |
| Mengeksplorasi Kelas | `HomeScreen.js` | `CourseCard`, `FlatList`, `Pressable` |
| Rincian Kelas | `DetailScreen.js` | `ScrollView`, `Image`, `CustomButton` |
| Menu Akun | `ProfileScreen.js` | Menu Item, `CustomButton` (Logout) |
| Interaktivitas (Hover/Press) | Seluruh Layar | `Pressable`, *Style transitions* |

**4. Alasan Keputusan Desain & Rencana Pengembangan:**
- **Keputusan Desain**: Menggunakan desain "Modern EdTech/SaaS" dengan palet warna monokrom bersih (*Slate & White*) agar terlihat profesional. Efek *Shadow* tipis dan interaksi *hover state* ditambahkan menggunakan API `Pressable` untuk memberikan kesan premium dan *feedback* taktil bagi pengguna, terutama saat diakses via Web.
- **Rencana Pengembangan**: 
  - Mengganti basis data statis (dari folder `data`) menjadi integrasi *backend* nyata (seperti Supabase atau Firebase).
  - Menghubungkan tombol "Enroll Now" ke *endpoint* *payment gateway* (Midtrans/Stripe).
  - Menyediakan fitur *video player* materi di dalam kelas yang sudah dibeli.

---

## 🎥 Video Demo (Poin G)
