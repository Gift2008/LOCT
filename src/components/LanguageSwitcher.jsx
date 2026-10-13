import React, { useEffect, useRef, useState } from "react";
import { useLocale } from "../i18n/LocaleProvider";
import { enabledLocales, getLocaleConfig } from "../i18n/locales";
import "../styles/languageswitch.css";
function LanguageSwitcher({ onSelect }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const choose = (code) => {
    setLocale(code);
    setOpen(false);
    if (onSelect) onSelect();
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span aria-hidden="true">🌐</span>
        {getLocaleConfig(locale).nativeName}
        <span className={`chevron ${open ? "open" : ""}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="lang-panel" role="listbox">
          {enabledLocales.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === locale}
              className={`lang-option ${l.code === locale ? "active" : ""}`}
              onClick={() => choose(l.code)}
            >
              {l.nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
