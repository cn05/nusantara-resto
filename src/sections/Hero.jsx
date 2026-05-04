import { highlights, images, site } from "../content/site.js";
import { GhostLink, PrimaryLink } from "../components/Buttons.jsx";
import Container from "../components/Container.jsx";
import { IconArrowRight } from "../components/Icons.jsx";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0" data-aos="fade-in">
        <img
          src={images.heroBg}
          alt="Hidangan Nusantara"
          className="h-full w-full object-cover opacity-55"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/70 to-neutral-950" />
      </div>

      <Container className="relative py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-300/80">
            Nusantara Cafe & Resto
          </p>
          <h1
            className="mt-4 font-display text-4xl leading-tight tracking-tight text-neutral-50 sm:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Rasa lokal,
            <span className="text-spice-300"> tampil modern.</span>
          </h1>
          <p
            className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {site.tagline}
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <PrimaryLink href="#menu" className="w-full sm:w-auto">
              Lihat Menu
              <IconArrowRight className="h-4 w-4" />
            </PrimaryLink>
            <GhostLink
              href={site.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              Lihat Video
              <IconArrowRight className="h-4 w-4" />
            </GhostLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((h, idx) => (
              <div
                key={h.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
              >
                <p className="text-sm font-semibold text-neutral-50">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
