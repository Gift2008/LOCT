export const locales = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    direction: "ltr",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    direction: "ltr",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    direction: "ltr",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    direction: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl",
  },
];

export const defaultLocale = "en";

export function isValidLocale(locale) {
  return locales.some((item) => item.code === locale);
}

export function getLocaleConfig(locale) {
  return locales.find((item) => item.code === locale) || locales[0];
}
