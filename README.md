# Nusantara Resto (React + Vite + pnpm + Tailwind)

Project portofolio: landing page restoran lokal dengan UI modern, dibuat full **React (JS)** + **Tailwind CSS**.

Tidak ada Bootstrap dan tidak ada PHP/back-end.

## Development

```bash
pnpm install
pnpm dev
```

Untuk testing di HP pada jaringan yang sama, jalankan:

```bash
pnpm dev:host
```

## Catatan

- Asset gambar tetap ada di `assets/img/` dan di-import dari `src/content/site.js` supaya ikut masuk ke output build Vite.
- Form kontak tidak mengirim ke server; tombol “Kirim Email” memakai `mailto:`.
- Animasi scroll menggunakan AOS (config mengikuti template BootstrapMade lama): `src/lib/aos.js`.

## Struktur `src/`

- `src/components/`: UI reusable (Header, Footer, Modal, dll)
- `src/sections/`: Section halaman (Hero, Menu, Contact, dll)
- `src/content/site.js`: Data konten (menu, gambar, dsb)
- `src/lib/`: helper kecil (`cx`, `headLinks`)

## Tailwind CSS

Konfigurasi ada di `tailwind.config.cjs` (custom font + warna aksen `spice`).
