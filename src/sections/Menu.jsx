import { useEffect, useMemo, useState } from "react";
import { menuCategories, menuItems } from "../content/site.js";
import { PillButton } from "../components/Buttons.jsx";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { refreshAos } from "../lib/aos.js";

export default function Menu() {
  const [active, setActive] = useState("all");

  useEffect(() => {
    // Supaya animasi menu tetap terasa seperti template lama saat filter berubah.
    const t = setTimeout(() => refreshAos(), 0);
    return () => clearTimeout(t);
  }, [active]);

  const items = useMemo(() => {
    if (active === "all") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <section
      id="menu"
      className="scroll-mt-24 border-t border-neutral-900 py-14 sm:py-20"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              eyebrow="Menu"
              title="Hidangan istimewa Nusantara"
              desc="Pilih kategori favoritmu, lalu jelajahi menu andalan kami."
            />
          </div>

          <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="200">
            {menuCategories.map((c) => (
              <PillButton
                key={c.id}
                type="button"
                active={c.id === active}
                onClick={() => setActive(c.id)}
              >
                {c.label}
              </PillButton>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 transition hover:border-neutral-700 hover:bg-neutral-900/40"
              data-aos="fade-up"
              data-aos-delay={100 + (idx % 2) * 100}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <p className="text-sm font-semibold text-neutral-50">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold text-spice-300">
                    {item.price}
                  </p>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
