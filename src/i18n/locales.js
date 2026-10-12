export const locales = [
  { code: "en", nativeName: "English", direction: "ltr", enabled: true },
  { code: "fr", nativeName: "Français", direction: "ltr", enabled: true },
  { code: "es", nativeName: "Español", direction: "ltr", enabled: true },
  { code: "de", nativeName: "Deutsch", direction: "ltr", enabled: true },
  { code: "pt", nativeName: "Português", direction: "ltr", enabled: true },
  // Turn on only after the RTL CSS pass (see notes at the end)
  { code: "ar", nativeName: "العربية", direction: "rtl", enabled: true },
];

export const defaultLocale = "en";
export const enabledLocales = locales.filter((l) => l.enabled);

export const isValidLocale = (code) =>
  enabledLocales.some((l) => l.code === code);

export const getLocaleConfig = (code) =>
  locales.find((l) => l.code === code) || locales[0];
