# Website Kenangan Pasangan

Website kenangan romantis untuk menyimpan cerita dan foto indah bersama pasangan.

## Fitur

- **Dark Mode**: Tema gelap yang elegan dan romantis
- **Single Page Scroll**: Navigasi halus antar section
- **Responsive**: Tampil optimal di desktop dan mobile
- **Animasi Halus**: Transisi dan efek yang tidak berlebihan
- **Gallery Interaktif**: Modal fullscreen dengan navigasi
- **Pesan Cinta**: Animasi amplop yang terbuka

## Struktur Folder

```
kenangan-website/
├── index.html          # File HTML utama
├── css/
│   └── style.css       # Styling dan animasi
├── js/
│   └── script.js       # Interaktivitas JavaScript
├── images/             # Folder untuk gambar
│   ├── hero-left.jpg   # Foto pasangan kiri di hero
│   ├── hero-right.jpg  # Foto pasangan kanan di hero
│   ├── first-time1.jpg # Foto untuk card pertama
│   ├── first-time2.jpg # Foto untuk card kedua
│   ├── first-time3.jpg # Foto untuk card ketiga
│   ├── gallery1.jpg    # Foto gallery 1
│   ├── gallery2.jpg    # Foto gallery 2
│   ├── gallery3.jpg    # Foto gallery 3
│   ├── gallery4.jpg    # Foto gallery 4
│   ├── gallery5.jpg    # Foto gallery 5
│   └── gallery6.jpg    # Foto gallery 6
└── README.md           # Dokumentasi ini
```

## Cara Menggunakan

1. **Tambah Gambar**: Letakkan gambar-gambar sesuai nama file di folder `images/`
2. **Edit Konten**: 
   - Buka `index.html` untuk mengubah teks dan nama
   - Sesuaikan cerita di section First Time, Day Time, dll.
3. **Jalankan Server Lokal**:
   - Buka terminal di folder `kenangan-website`
   - Jalankan: `python -m http.server 8000`
   - Buka browser ke `http://localhost:8000`

## Kustomisasi

- **Warna**: Ubah variabel CSS di `style.css` (contoh: `#ff69b4` untuk pink)
- **Font**: Ganti font di CSS atau tambah Google Fonts
- **Konten**: Edit teks langsung di `index.html`
- **Animasi**: Sesuaikan timing di CSS dan JavaScript

## Browser Support

- Chrome/Edge: Penuh
- Firefox: Penuh
- Safari: Penuh
- IE11: Terbatas (tanpa backdrop-filter)

## Lisensi

Website ini dibuat untuk keperluan pribadi. Gunakan dengan bijak! ❤️
