import heroBg from "../../assets/img/hero-bg.webp";
import aboutImg from "../../assets/img/about.avif";
import aboutBg from "../../assets/img/about-bg.jpg";
import eventsBg from "../../assets/img/events-bg.jpg";

import menuSateLilit from "../../assets/img/menu/sate-lilit.webp";
import menuRendang from "../../assets/img/menu/rendang.webp";
import menuBakwan from "../../assets/img/menu/bakwan.jpg";
import menuGado from "../../assets/img/menu/gado.webp";
import menuNasgor from "../../assets/img/menu/nasgor.jpg";
import menuLumpia from "../../assets/img/menu/lumpia.jpg";
import menuPlecing from "../../assets/img/menu/plecing-kangkung.jpeg";
import menuKaredok from "../../assets/img/menu/karedok.jpg";
import menuSopBuntut from "../../assets/img/menu/sop-buntut.jpg";

import specials1 from "../../assets/img/specials-1.png";
import specials2 from "../../assets/img/specials-2.png";
import specials3 from "../../assets/img/specials-3.png";

import event1 from "../../assets/img/events-slider/events-slider-1.jpg";
import event2 from "../../assets/img/events-slider/events-slider-2.jpg";
import event3 from "../../assets/img/events-slider/events-slider-3.jpg";

import chef1 from "../../assets/img/chefs/chefs-1.jpg";
import chef2 from "../../assets/img/chefs/chefs-2.jpg";
import chef3 from "../../assets/img/chefs/chefs-3.jpg";

import t1 from "../../assets/img/testimonials/testimonials-1.jpg";
import t2 from "../../assets/img/testimonials/testimonials-2.jpg";
import t3 from "../../assets/img/testimonials/testimonials-3.jpg";
import t4 from "../../assets/img/testimonials/testimonials-4.jpg";
import t5 from "../../assets/img/testimonials/testimonials-5.jpg";

import g1 from "../../assets/img/gallery/gallery-1.jpg";
import g2 from "../../assets/img/gallery/gallery-2.jpg";
import g3 from "../../assets/img/gallery/gallery-3.jpg";
import g4 from "../../assets/img/gallery/gallery-4.jpg";
import g5 from "../../assets/img/gallery/gallery-5.jpg";
import g6 from "../../assets/img/gallery/gallery-6.jpg";
import g7 from "../../assets/img/gallery/gallery-7.jpg";
import g8 from "../../assets/img/gallery/gallery-8.jpg";

export const site = {
  name: "Nusantara Cafe & Resto",
  brand: "Nusantara",
  tagline:
    "Hidangan dengan cita rasa otentik warisan leluhur selama lebih dari 15 tahun.",
  email: "contact@nusantararesto.com",
  phone: "+6281234567899",
  address: "Jalan Japati, Tangerang, Jawa Barat 53502",
  hours: "Senin–Sabtu • 11:00–23:00",
  youtubeUrl: "https://www.youtube.com/watch?v=Y7f98aduVJ8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.851637433609!2d107.16999969999999!3d-6.2832259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69853ac45baecb%3A0xf89dc9570ba7a15b!2sKAMPOENGAN%20RESTO!5e0!3m2!1sid!2sid!4v1774892583586!5m2!1sid!2sid",
};

export const navLinks = [
  { id: "about", label: "Tentang" },
  { id: "menu", label: "Menu" },
  { id: "specials", label: "Spesial" },
  { id: "events", label: "Acara" },
  { id: "testimonials", label: "Testimoni" },
  { id: "gallery", label: "Galeri" },
  { id: "contact", label: "Kontak" },
];

export const images = {
  heroBg,
  aboutImg,
  aboutBg,
  eventsBg,
};

export const highlights = [
  {
    title: "Rempah & Bahan Pilihan",
    body:
      "Setiap sajian dikurasi oleh koki berpengalaman, menggunakan bahan segar dan rempah lokal berkualitas.",
  },
  {
    title: "Resep Warisan Leluhur",
    body:
      "Rasa otentik yang dijaga turun-temurun, diracik dengan presisi agar konsisten di setiap kunjungan.",
  },
  {
    title: "Atmosfer & Pelayanan",
    body:
      "Suasana hangat bernuansa Nusantara dengan pelayanan ramah, cocok untuk keluarga maupun jamuan penting.",
  },
];

export const menuCategories = [
  { id: "all", label: "Semua" },
  { id: "starters", label: "Pembuka" },
  { id: "salads", label: "Sayuran" },
  { id: "specialty", label: "Andalan" },
];

export const menuItems = [
  {
    id: "sate-lilit",
    category: "starters",
    name: "Sate Lilit Bali",
    price: "Rp45.000",
    desc:
      "Sate ikan tenggiri cincang dengan bumbu genep khas Bali, disajikan dengan sambal matah segar.",
    image: menuSateLilit,
  },
  {
    id: "rendang",
    category: "specialty",
    name: "Rendang Daging Minang",
    price: "Rp85.000",
    desc:
      "Daging sapi pilihan yang dimasak perlahan selama 8 jam dengan santan kental dan paduan rempah rahasia.",
    image: menuRendang,
  },
  {
    id: "bakwan",
    category: "starters",
    name: "Bakwan Jagung Manado",
    price: "Rp35.000",
    desc:
      "Perkedel jagung manis berpadu dengan rempah beraroma, digoreng renyah dan disajikan hangat.",
    image: menuBakwan,
  },
  {
    id: "gado-gado",
    category: "salads",
    name: "Gado-Gado Premium",
    price: "Rp40.000",
    desc:
      "Sayuran segar rebus, telur, tahu, dan tempe yang disiram bumbu kacang tanah legit dengan taburan emping.",
    image: menuGado,
  },
  {
    id: "nasi-goreng",
    category: "specialty",
    name: "Nasi Goreng Kampung",
    price: "Rp65.000",
    desc:
      "Nasi goreng berbumbu rempah tradisional, disajikan dengan ayam kampung goreng, telur, dan sate ayam.",
    image: menuNasgor,
  },
  {
    id: "lumpia",
    category: "starters",
    name: "Lumpia Udang Semarang",
    price: "Rp45.000",
    desc:
      "Rebung manis, udang segar, dan ebi pilihan yang dibalut kulit lumpia renyah. Disajikan hangat dengan saus bawang putih manis khas pesisir.",
    image: menuLumpia,
  },
  {
    id: "plecing",
    category: "salads",
    name: "Plecing Kangkung",
    price: "Rp30.000",
    desc:
      "Kangkung segar rebus dengan siraman sambal tomat terasi khas Lombok yang pedas dan menyegarkan.",
    image: menuPlecing,
  },
  {
    id: "karedok",
    category: "salads",
    name: "Karedok Sunda",
    price: "Rp35.000",
    desc:
      "Potongan sayuran mentah segar yang renyah, diaduk rata dengan bumbu kacang tanah beraroma kencur yang harum dan sedikit pedas.",
    image: menuKaredok,
  },
  {
    id: "sop-buntut",
    category: "specialty",
    name: "Sop Buntut Legendaris",
    price: "Rp120.000",
    desc:
      "Potongan buntut sapi sangat empuk dalam kuah kaldu bening kaya rempah, bertabur daun bawang dan bawang goreng.",
    image: menuSopBuntut,
  },
];

export const specials = [
  {
    id: "bali",
    name: "Nasi Campur Bali",
    title: "Nasi Campur Spesial Khas Pulau Dewata",
    lead:
      "Kombinasi sempurna dari berbagai cita rasa eksotis Bali dalam satu piring yang menggugah selera.",
    body:
      "Nasi putih hangat ditemani sate lilit ayam, ayam suwir bumbu pelalah, lawar, dan sambal matah yang menyegarkan — diracik untuk menghadirkan pengalaman otentik ala Jimbaran.",
    image: specials1,
  },
  {
    id: "iga",
    name: "Iga Bakar Madu",
    title: "Iga Sapi Bakar Madu Ketumbar",
    lead:
      "Iga sapi premium yang meleleh di mulut dengan balutan glasir madu hutan murni.",
    body:
      "Iga sapi pilihan diungkep perlahan berjam-jam, lalu dibakar di atas arang dengan olesan madu, ketumbar, dan kecap manis hingga berkaramel sempurna.",
    image: specials2,
  },
  {
    id: "gurame",
    name: "Gurame Pesmol",
    title: "Gurame Crispy Bumbu Pesmol Cianjur",
    lead:
      "Perpaduan gurame renyah dengan bumbu pesmol yang asam, pedas, dan menyegarkan.",
    body:
      "Gurame segar digoreng garing di luar, lembut di dalam, lalu disiram bumbu kuning pesmol kaya kunyit, kemiri, dan serai — ditutup taburan cabai rawit.",
    image: specials3,
  },
];

export const events = [
  {
    id: "birthday",
    name: "Syukuran & Ulang Tahun",
    price: "Rp150.000 / pax",
    lead:
      "Rayakan momen berharga dengan suasana hangat dan hidangan yang menggugah selera.",
    bullets: [
      "Bebas biaya sewa area (minimum pemesanan pax tertentu).",
      "Gratis dekorasi meja standar dan Nasi Tumpeng Mini.",
      "Sound system dasar untuk sambutan & doa bersama.",
    ],
    body:
      "Tim kami siap membantu merancang perayaan yang rapi, santai, dan penuh rasa syukur — tanpa ribet.",
    image: event1,
  },
  {
    id: "vip",
    name: "Jamuan Privat & VIP",
    price: "Rp2.500.000",
    lead:
      "Ruang privat eksklusif untuk meeting bisnis atau jamuan keluarga tercinta.",
    bullets: [
      "Ruangan ber-AC bernuansa Nusantara.",
      "Pramusaji pribadi selama acara.",
      "Buffet atau set menu istimewa.",
    ],
    body:
      "Nikmati privasi, kenyamanan, dan layanan profesional — cocok untuk momen yang butuh fokus dan kualitas.",
    image: event2,
  },
  {
    id: "wedding",
    name: "Intimate Wedding & Gathering",
    price: "Hubungi kami",
    lead:
      "Tata ruang fleksibel dan katering premium untuk acara impian atau gathering perusahaan.",
    bullets: [
      "Kapasitas hingga 150 tamu.",
      "Custom menu bersama kepala koki.",
      "Dukungan tim acara untuk kelancaran event.",
    ],
    body:
      "Dari konsep intim hingga acara akhir tahun, semuanya bisa dibuat terasa personal dan berkelas.",
    image: event3,
  },
];

export const testimonials = [
  {
    id: "budi",
    quote:
      "Tempat yang sempurna untuk menjamu klien penting. Suasananya berkelas, dan iga bakar madunya luar biasa empuk.",
    name: "Budi Santoso",
    title: "CEO • Pengusaha",
    image: t1,
  },
  {
    id: "kirana",
    quote:
      "Ambiennya elegan dengan sentuhan tradisional yang pas. Nasi Campur Balinya bikin nostalgia liburan di Ubud.",
    name: "Kirana Larasati",
    title: "Desainer Interior",
    image: t2,
  },
  {
    id: "ayu",
    quote:
      "Sop buntutnya otentik dan disukai anak-anak. Porsinya mantap, tempatnya bersih, pelayanannya cepat.",
    name: "dr. Ayu & Keluarga",
    title: "Pelanggan Setia",
    image: t3,
  },
  {
    id: "michael",
    quote:
      "Hidden gem! Rendang di sini termasuk yang terbaik yang pernah saya cicipi. Rempahnya kaya namun seimbang.",
    name: "Michael Anderson",
    title: "Ekspatriat",
    image: t4,
  },
  {
    id: "dana",
    quote:
      "Presentasi makanannya sekelas fine dining. Gurame pesmolnya matang sempurna dan bumbunya meresap.",
    name: "Dana Permana",
    title: "Food Vlogger",
    image: t5,
  },
];

export const chefs = [
  { id: "walter", name: "Walter White", role: "Master Chef", image: chef1 },
  { id: "sarah", name: "Sarah Jhonson", role: "Patissier", image: chef2 },
  { id: "william", name: "William Anderson", role: "Cook", image: chef3 },
];

export const gallery = [
  { id: "g1", image: g1 },
  { id: "g2", image: g2 },
  { id: "g3", image: g3 },
  { id: "g4", image: g4 },
  { id: "g5", image: g5 },
  { id: "g6", image: g6 },
  { id: "g7", image: g7 },
  { id: "g8", image: g8 },
];

