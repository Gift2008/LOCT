import "server-only";

const messageFiles = {
  en: () => import("../messages/en.json"),
  fr: () => import("../messages/fr.json"),
  es: () => import("../messages/es.json"),
  de: () => import("../messages/de.json"),
  pt: () => import("../messages/pt.json"),
  ar: () => import("../messages/ar.json"),
};

export async function getMessages(locale) {
  const loader = messageFiles[locale] || messageFiles.en;

  const module = await loader();

  return module.default || module;
}
