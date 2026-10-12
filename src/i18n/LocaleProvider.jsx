import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultLocale, getLocaleConfig, isValidLocale } from "./locales";
import en from "./messages/en.json";

const STORAGE_KEY = "LOCT_LOCALE";

// Vite lazy-loads each language file, so visitors only download the one they use
const loaders = import.meta.glob("./messages/*.json");

const LocaleContext = createContext(null);

function readSavedLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && isValidLocale(saved) ? saved : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

// returns whatever is at that key (string, array, object)
function rawLookup(messages, key) {
  return key
    .split(".")
    .reduce(
      (current, part) =>
        current && typeof current === "object" ? current[part] : undefined,
      messages,
    );
}

// strings only, used by t()
function lookup(messages, key) {
  const value = rawLookup(messages, key);
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(readSavedLocale);
  const [messages, setMessages] = useState(en);

  // Load the selected language file
  useEffect(() => {
    let cancelled = false;
    if (locale === "en") {
      setMessages(en);
      return;
    }
    const loader = loaders[`./messages/${locale}.json`];
    if (!loader) {
      setMessages(en);
      return;
    }
    loader()
      .then((mod) => {
        if (!cancelled) setMessages(mod.default || mod);
      })
      .catch(() => {
        if (!cancelled) setMessages(en);
      });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  // Keep <html lang> and <html dir> in sync (this is what makes RTL work)
  useEffect(() => {
    const { code, direction } = getLocaleConfig(locale);
    document.documentElement.lang = code;
    document.documentElement.dir = direction;
  }, [locale]);

  const setLocale = useCallback((code) => {
    if (!isValidLocale(code)) return;
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* private mode: language still changes for this session */
    }
    setLocaleState(code);
  }, []);

  // Selected language -> English -> your fallback text.
  // Customers never see "undefined" or a raw key; in dev you see the key so gaps are obvious.
  const t = useCallback(
    (key, fallback = "") =>
      lookup(messages, key) ??
      lookup(en, key) ??
      (fallback || (import.meta.env.DEV ? key : "")),
    [messages],
  );

  // For arrays/objects like the blog post bodies; falls back to English
  const tRaw = useCallback(
    (key) => rawLookup(messages, key) ?? rawLookup(en, key),
    [messages],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      tRaw,
      direction: getLocaleConfig(locale).direction,
    }),
    [locale, setLocale, t, tRaw],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
