import { defaultLocale, isValidLocale } from "./locales";

export function getCurrentLocale() {
  try {
    const saved = localStorage.getItem("LOCT_LOCALE");
    return saved && isValidLocale(saved) ? saved : defaultLocale;
  } catch {
    return defaultLocale;
  }
}
