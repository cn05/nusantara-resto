import { images, site } from "../content/site.js";
import Container from "../components/Container.jsx";
import { IconClock, IconMapPin } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              eyebrow="Tentang"
              title="Menghadirkan jiwa Nusantara di setiap sajian"
              desc="Berawal dari dedikasi melestarikan resep leluhur, kami menyajikan pengalaman kuliner otentik dalam balutan modern yang nyaman."
            />
            <ul className="mt-6 grid gap-3 text-sm text-neutral-200">
              <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
                Menggunakan rempah lokal berkualitas dan bahan segar pilihan.
              </li>
              <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
                Resep keluarga yang dijaga konsistensi rasanya dari generasi ke
                generasi.
              </li>
              <li className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
                Suasana hangat dan eksklusif, cocok untuk momen berharga.
              </li>
            </ul>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-spice-500/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-950/40 shadow-soft">
              <img
                src={images.aboutImg}
                alt="Suasana restoran"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <IconMapPin className="h-4 w-4 text-spice-300" />
                <span>{site.address}</span>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <IconClock className="h-4 w-4 text-spice-300" />
                <span>{site.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
