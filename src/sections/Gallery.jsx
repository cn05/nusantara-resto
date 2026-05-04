import { useState } from "react";
import { gallery } from "../content/site.js";
import { cx } from "../lib/cx.js";
import Container from "../components/Container.jsx";
import { IconX } from "../components/Icons.jsx";
import Modal from "../components/Modal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            eyebrow="Galeri"
            title="Momen dan suasana"
            desc="Sekilas vibe restoran — hangat, nyaman, dan siap bikin lapar."
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, idx) => (
            <button
              key={g.id}
              type="button"
              className={cx(
                "group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 text-left",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
              )}
              onClick={() => {
                setActive(g);
                setOpen(true);
              }}
              aria-label="Buka foto"
              data-aos="fade-up"
              data-aos-delay={200 + (idx % 4) * 100}
            >
              <img
                src={g.image}
                alt="Galeri restoran"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </Container>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
      >
        <div className="relative">
          <div className="flex items-center justify-between border-b border-neutral-800 p-4">
            <p className="text-sm font-semibold text-neutral-200">Galeri</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setActive(null);
              }}
              className={cx(
                "inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-2 text-neutral-100 transition hover:border-neutral-700 hover:bg-neutral-900/50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
              )}
              aria-label="Tutup"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          {active ? (
            <img
              src={active.image}
              alt="Galeri restoran"
              className="max-h-[75vh] w-full object-contain bg-neutral-950"
            />
          ) : null}
        </div>
      </Modal>
    </section>
  );
}
