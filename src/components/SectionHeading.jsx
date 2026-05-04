import { cx } from "../lib/cx.js";

export default function SectionHeading({ eyebrow, title, desc, align = "left" }) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spice-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-50 sm:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

