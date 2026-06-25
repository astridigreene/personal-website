export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function stripHashFromUrl() {
  const { pathname, search } = window.location;
  if (window.location.hash) {
    history.replaceState(null, "", `${pathname}${search}`);
  }
}
