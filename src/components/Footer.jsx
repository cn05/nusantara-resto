import { site } from "../content/site.js";
import Container from "./Container.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-neutral-50">{site.name}</p>
          <p className="mt-2 max-w-md text-sm text-neutral-400"></p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-neutral-300">
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-50"
          >
            {site.email}
          </a>
          <a
            href={`https://wa.me/${site.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-neutral-700 underline-offset-4 hover:text-neutral-50"
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </footer>
  );
}
