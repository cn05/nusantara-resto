import { events, images } from "../content/site.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Events() {
  return (
    <section
      id="events"
      className="relative scroll-mt-24 border-t border-neutral-900 py-14 sm:py-20"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={images.eventsBg}
          alt="Acara"
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-neutral-950/80" />
      </div>

      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            eyebrow="Acara"
            title="Rayakan momen, tanpa ribet"
            desc="Paket fleksibel untuk syukuran, jamuan privat, sampai gathering perusahaan."
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {events.map((e, idx) => (
            <div
              key={e.id}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
            >
              <img
                src={e.image}
                alt={e.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-neutral-50">{e.name}</p>
                  <p className="text-xs font-semibold text-spice-300">
                    {e.price}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {e.lead}
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-neutral-200">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-3"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  {e.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
