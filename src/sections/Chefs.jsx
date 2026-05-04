import { chefs } from "../content/site.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Chefs() {
  return (
    <section className="border-t border-neutral-900 py-14 sm:py-20">
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            eyebrow="Tim"
            title="Chef andalan Nusantara"
            desc="Orang-orang di balik rasa yang kamu cari."
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chefs.map((c, idx) => (
            <div
              key={c.id}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
            >
              <img
                src={c.image}
                alt={c.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <p className="text-sm font-semibold text-neutral-50">{c.name}</p>
                <p className="mt-1 text-sm text-neutral-300">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
