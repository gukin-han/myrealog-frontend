export function writeUrlAsCookie() {
    document.cookie =
      "beforeLogin=" + window.location.pathname + "; path=/; max-age=3600";
  }