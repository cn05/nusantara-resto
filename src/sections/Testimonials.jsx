import { testimonials } from "../content/site.js";
import Container from "../components/Container.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              eyebrow="Testimoni"
              title="Cerita dari mereka"
              desc="Biar mereka yang bicara — tentang rasa, suasana, dan pelayanan."
            />
          </div>
          <p className="text-sm text-neutral-400">Geser untuk melihat semuanya</p>
        </div>

        <div className="mt-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-4">
            {testimonials.map((t, idx) => (
              <figure
                key={t.id}
                className="snap-center"
                data-aos="fade-up"
                data-aos-delay={200 + (idx % 3) * 100}
              >
                <div className="w-[min(84vw,420px)] rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 sm:p-6">
                  <blockquote className="text-sm leading-relaxed text-neutral-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-sm font-semibold text-neutral-50">
                        {t.name}
                      </p>
                      <p className="text-xs text-neutral-400">{t.title}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
