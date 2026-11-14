## Ringkasan Perubahan
Membuat aplikasi Manajemen Produk dengan React (Vite): daftar produk berbentuk
kartu, pencarian nama produk, serta modal tambah, edit, dan hapus produk dengan
validasi harga lebih dari 0.

## Bukti Pengujian
| Skenario | Hasil yang Diharapkan | Hasil Aktual |
|---|---|---|
| Membuka halaman utama | 5 produk tampil dengan harga berformat Rupiah | Sesuai |
| Mencari "buku" | Hanya Buku Tulis tampil | Sesuai |
| Tambah produk dengan harga 0 | Muncul pesan error, data tidak tersimpan | Sesuai |
| Tambah produk valid | Produk baru muncul di daftar | Sesuai |
| Edit produk | Data produk berubah | Sesuai |
| Hapus produk | Produk hilang setelah dikonfirmasi | Sesuai |
