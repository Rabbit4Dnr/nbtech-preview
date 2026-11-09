"use strict";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navegacion");
const mobile = window.matchMedia("(max-width: 760px)");
function setMenu(open, restoreFocus = false) {
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.hidden = mobile.matches && !open;
  menuButton.querySelector("span").textContent = open ? "−" : "+";
  if (restoreFocus) menuButton.focus();
}
function adaptMenu() {
  menuButton.hidden = !mobile.matches;
  setMenu(false);
}
menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", (event) => {
  if (mobile.matches && event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobile.matches && menuButton.getAttribute("aria-expanded") === "true") setMenu(false, true);
});
mobile.addEventListener("change", adaptMenu);
adaptMenu();

const faviconLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
if (faviconLink) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const updateFavicon = () => {
    const variant = colorScheme.matches ? "dark" : "light";
    faviconLink.href = new URL(`assets/favicon-nbtech-${variant}.svg`, document.baseURI).href;
  };
  updateFavicon();
  colorScheme.addEventListener("change", updateFavicon);
}

// Progressive enhancement: every offer remains readable when JavaScript is unavailable.
const carousel = document.querySelector(".offers-carousel");
if (carousel) {
  const slides = [...carousel.querySelectorAll(".offer-card")];
  const controls = carousel.querySelector(".carousel-controls");
  const indicators = carousel.querySelector(".carousel-indicators");
  const position = carousel.querySelector(".carousel-position");
  let current = 0;
  const buttons = slides.map((slide, index) => {
    const button = document.createElement("button");
    button.type = "button";
    const title = slide.dataset.selectorTitle || slide.querySelector("h3").textContent;
    button.textContent = title;
    button.setAttribute("aria-label", `${document.documentElement.lang === "en" ? "View solution" : "Ver solución"}: ${title}`);
    button.setAttribute("aria-controls", slide.id);
    button.addEventListener("click", () => show(index));
    indicators.append(button);
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", document.documentElement.lang === "en" ? "slide" : "diapositiva");
    return button;
  });
  function show(index) {
    const next = (index + slides.length) % slides.length;
    // Move focus before hiding a slide that contains it (keyboard or swipe).
    if (slides[current].contains(document.activeElement)) buttons[next].focus({ preventScroll: true });
    current = next;
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
      slide.inert = i !== current;
      buttons[i].setAttribute("aria-current", String(i === current));
    });
    position.textContent = buttons[current].textContent;
    slides[current].classList.remove("offer-enter");
    void slides[current].offsetWidth;
    slides[current].classList.add("offer-enter");
  }
  carousel.querySelector(".carousel-prev").addEventListener("click", () => show(current - 1));
  carousel.querySelector(".carousel-next").addEventListener("click", () => show(current + 1));
  carousel.addEventListener("keydown", (event) => {
    const target = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: slides.length - 1 }[event.key];
    if (target === undefined || event.altKey || event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    show(target);
  });
  const track = carousel.querySelector(".offer-slides");
  let start = null;
  track.addEventListener("touchstart", (event) => {
    start = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  track.addEventListener("touchcancel", () => { start = null; }, { passive: true });
  track.addEventListener("touchend", (event) => {
    if (!start || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    start = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
  }, { passive: true });
  carousel.dataset.enhanced = "true";
  carousel.setAttribute("aria-roledescription", document.documentElement.lang === "en" ? "carousel" : "carrusel");
  controls.hidden = false;
  function translateCarousel() {
    const english = document.documentElement.lang === "en";
    slides.forEach((slide, i) => {
      const title = i === 3 ? (english ? "AI" : "IA") : slide.dataset.selectorTitle;
      buttons[i].textContent = title;
      buttons[i].setAttribute("aria-label", `${english ? "View solution" : "Ver solución"}: ${title}`);
      slide.setAttribute("aria-roledescription", english ? "slide" : "diapositiva");
    });
    carousel.setAttribute("aria-roledescription", english ? "carousel" : "carrusel");
    position.textContent = buttons[current].textContent;
  }
  document.addEventListener("languagechange", translateCarousel);
  translateCarousel();
  show(0);
}
