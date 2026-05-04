import { useMemo, useState } from "react";
import { site } from "../content/site.js";
import { PrimaryLink } from "../components/Buttons.jsx";
import Container from "../components/Container.jsx";
import {
  IconArrowRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const to = site.email;
    const finalSubject = subject || `Pesan dari ${site.brand}`;
    const bodyLines = [
      `Nama: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message || "-",
    ];
    const body = bodyLines.join("\r\n");

    const params = new URLSearchParams();
    params.set("subject", finalSubject);
    params.set("body", body);
    return `mailto:${to}?${params.toString()}`;
  }, [email, message, name, subject]);

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-neutral-900 py-14 sm:py-20"
    >
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            eyebrow="Kontak"
            title="Hubungi kami"
            desc="Untuk reservasi cepat, paling gampang via WhatsApp. Untuk kebutuhan lain, kirim email lewat form ini."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              <div
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-start gap-3">
                  <IconMapPin className="mt-0.5 h-5 w-5 text-spice-300" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-50">
                      Lokasi
                    </p>
                    <p className="mt-1 text-sm text-neutral-300">
                      {site.address}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-start gap-3">
                  <IconClock className="mt-0.5 h-5 w-5 text-spice-300" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-50">
                      Jam buka
                    </p>
                    <p className="mt-1 text-sm text-neutral-300">
                      {site.hours}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-start gap-3">
                  <IconPhone className="mt-0.5 h-5 w-5 text-spice-300" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-50">
                      Telepon / WhatsApp
                    </p>
                    <a
                      className="mt-1 inline-block text-sm text-neutral-200 underline decoration-neutral-600 underline-offset-4 hover:text-neutral-50"
                      href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="flex items-start gap-3">
                  <IconMail className="mt-0.5 h-5 w-5 text-spice-300" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-50">
                      Email
                    </p>
                    <a
                      className="mt-1 inline-block text-sm text-neutral-200 underline decoration-neutral-600 underline-offset-4 hover:text-neutral-50"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-6 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <iframe
                title="Peta lokasi"
                style={{ border: 0, width: "100%", height: 320 }}
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 sm:p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = mailtoHref;
                  setSubmitted(true);
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-neutral-200">
                    Nama
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama"
                      className="h-11 rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-neutral-200">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="h-11 rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-neutral-200">
                  Subject
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="h-11 rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  />
                </label>

                <label className="grid gap-2 text-sm text-neutral-200">
                  Pesan
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tulis pesanmu..."
                    rows={6}
                    className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  />
                </label>

                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <PrimaryLink href={mailtoHref}>
                    Kirim Email
                    <IconArrowRight className="h-4 w-4" />
                  </PrimaryLink>
                  <p className="text-xs text-neutral-400">
                    {submitted
                      ? "Terima kasih! Email client kamu akan terbuka."
                      : "Reservasi lewat email"}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
