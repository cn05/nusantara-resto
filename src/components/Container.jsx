import { cx } from "../lib/cx.js";

export default function Container({ className, ...props }) {
  return (
    <div
      className={cx("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
      {...props}
    />
  );
}

