import AOS from "aos";

let didInit = false;

export function initAos() {
  if (didInit) return;
  didInit = true;

  // Match config dari template BootstrapMade sebelumnya (`assets/js/main.js`).
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Pastikan posisi offset dihitung ulang setelah layout settle.
  requestAnimationFrame(() => {
    AOS.refresh();
  });
}

export function refreshAos() {
  if (!didInit) {
    initAos();
    return;
  }
  AOS.refreshHard();
}
