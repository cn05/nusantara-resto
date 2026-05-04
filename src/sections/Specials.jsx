import { useMemo, useState } from "react";
import { specials } from "../content/site.js";
import Container from "../components/Container.jsx";
import { IconArrowRight } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Specials() {
  const [activeId, setActiveId] = useState(specials[0]?.id ?? "");
  const active = useMemo(
    () => specials.find((s) => s.id === activeId) ?? specials[0],
    [activeId],
  );

  if (!active) return null;

  return (
    <section id="specials" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div data-aos="fade-up" data-aos-delay="100">
              <SectionHeading
                eyebrow="Spesial"
                title="Mahakarya rasa pilihan"
                desc='Tiga menu spesial yang paling sering jadi "bintang meja".'
              />
            </div>

            <div className="mt-6 grid gap-2">
              {specials.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  aria-pressed={s.id === activeId}
                  className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/40 px-4 py-4 text-left transition hover:border-neutral-700 hover:bg-neutral-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 aria-pressed:border-spice-500/50 aria-pressed:bg-spice-500/10"
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 100}
                >
                  <div>
                    <p className="text-sm font-semibold text-neutral-50">
                      {s.name}
                    </p>
                    <p className="mt-1 text-sm text-neutral-300">{s.lead}</p>
                  </div>
                  <IconArrowRight className="h-4 w-4 flex-none text-neutral-300" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="200">
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950/40 shadow-soft">
              <img
                src={active.image}
                alt={active.name}
                className="aspect-[16/10] w-full object-cover opacity-90"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-300/80">
                  Menu spesial
                </p>
                <p className="mt-3 font-display text-2xl tracking-tight text-neutral-50 sm:text-3xl">
                  {active.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-200">
                  {active.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
