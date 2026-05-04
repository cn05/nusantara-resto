import { cx } from "../lib/cx.js";

export function PillButton({ active, className, ...props }) {
  return (
    <button
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        active
          ? "border-spice-500/50 bg-spice-500/15 text-spice-100"
          : "border-neutral-800 bg-neutral-950/40 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900/50",
        className,
      )}
      {...props}
    />
  );
}

export function PrimaryLink({ className, ...props }) {
  return (
    <a
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-spice-500 px-4 py-2.5 text-sm font-medium text-neutral-950 shadow-soft shadow-spice-500/10 transition hover:bg-spice-400",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        className,
      )}
      {...props}
    />
  );
}

export function GhostLink({ className, ...props }) {
  return (
    <a
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-neutral-700 hover:bg-neutral-900/50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-spice-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        className,
      )}
      {...props}
    />
  );
}

