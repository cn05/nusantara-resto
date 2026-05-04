import { useEffect } from "react";
import appleTouchIconPng from "../assets/img/apple-touch-icon.png";
import faviconPng from "../assets/img/favicon.png";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { initAos, refreshAos } from "./lib/aos.js";
import { ensureLink } from "./lib/headLinks.js";
import About from "./sections/About.jsx";
import Chefs from "./sections/Chefs.jsx";
import Contact from "./sections/Contact.jsx";
import Events from "./sections/Events.jsx";
import Gallery from "./sections/Gallery.jsx";
import Hero from "./sections/Hero.jsx";
import Menu from "./sections/Menu.jsx";
import Specials from "./sections/Specials.jsx";
import Testimonials from "./sections/Testimonials.jsx";

export default function App() {
  useEffect(() => {
    // Pastikan icon ikut kebundle saat build (nggak bergantung file di `public/`).
    ensureLink("icon", faviconPng);
    ensureLink("apple-touch-icon", appleTouchIconPng);

    initAos();
  }, []);

  useEffect(() => {
    // Refresh AOS saat komponen/section (dan gambar) sudah ter-render.
    // Ini membantu konsisten dengan behavior template lama yang init di `window.load`.
    const t = setTimeout(() => refreshAos(), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Events />
        <Testimonials />
        <Chefs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
