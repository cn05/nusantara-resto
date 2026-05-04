import { useMemo, useState } from "react";
import { navLinks, site } from "../content/site.js";
import { cx } from "../lib/cx.js";
import { PrimaryLink } from "./Buttons.jsx";
import Container from "./Container.jsx";
import { IconArrowRight, IconMenu, IconX } from "./Icons.jsx";
import Modal from "./Modal.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  const waLink = useMemo(() => {
    const phone = site.phone.replace(/\D/g, "");
    const text = `Halo ${site.brand}, saya mau reservasi meja.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-950/70 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-neutral-50 sm:text-2xl">
            {site.brand}
          </span>
          <span className="hidden text-xs text-neutral-400 sm:inline">
            Cafe & Resto
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition hover:text-neutral-50 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PrimaryLink href={waLink} className="hidden sm:inline-flex">
            Reservasi
            <IconArrowRight className="h-4 w-4" />
          </PrimaryLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cx(
              "inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-2.5 text-neutral-100 transition hover:border-neutral-700 hover:bg-neutral-900/50 md:hidden",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
            )}
            aria-label="Buka menu"
          >
            <IconMenu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-neutral-200">Menu</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={cx(
                "inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/40 p-2 text-neutral-100 transition hover:border-neutral-700 hover:bg-neutral-900/50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
              )}
              aria-label="Tutup menu"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid gap-2">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-900/50"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-4">
            <PrimaryLink href={waLink} className="w-full">
              Reservasi via WhatsApp
              <IconArrowRight className="h-4 w-4" />
            </PrimaryLink>
          </div>
        </div>
      </Modal>
    </header>
  );
}

