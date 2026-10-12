// DataDeletion.jsx
import React from "react";
import "../styles/legal.css";
import useTitles from "./Hooks/useTitles";
import { useLocale } from "../i18n/LocaleProvider";

// Not translated: these must stay identical in every language
const EMAIL = "hello@lines-of-code.com.ng";
const WEBSITE = "www.lines-of-code.com.ng";
const RC = "RC: 9689529";
const SUBJECT = "Data Deletion Request";

function Datadeletion() {
  const { t, tRaw } = useLocale();
  useTitles(t("dataDeletion.pageTitle"));

  const list = (key) => {
    const value = tRaw(key);
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="legal-page">
      <h1>{t("dataDeletion.heading")}</h1>
      <p className="legal-meta">
        <strong>{t("dataDeletion.lastUpdatedLabel")}</strong>{" "}
        {t("dataDeletion.lastUpdated")}
      </p>
      <p className="legal-meta">
        <strong>{t("dataDeletion.companyLabel")}</strong>{" "}
        {t("dataDeletion.companyName")} — {RC}
      </p>

      <h2>{t("dataDeletion.requestHeading")}</h2>
      <p>{t("dataDeletion.requestIntro")}</p>

      <h2>{t("dataDeletion.howHeading")}</h2>
      <p>
        {t("dataDeletion.sendBefore")} <strong>{EMAIL}</strong>{" "}
        {t("dataDeletion.sendAfter")} <strong>"{SUBJECT}"</strong>
      </p>
      <p>{t("dataDeletion.pleaseInclude")}</p>
      <ol>
        {list("dataDeletion.includeList").map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>{t("dataDeletion.nextHeading")}</h2>
      <ul>
        {list("dataDeletion.steps").map((step) => (
          <li key={step.label}>
            <strong>{step.label}</strong> {step.text}
          </li>
        ))}
      </ul>

      <h2>{t("dataDeletion.notesHeading")}</h2>
      <ul>
        {list("dataDeletion.notes").map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <h2>{t("dataDeletion.contactHeading")}</h2>
      <p>
        {t("dataDeletion.companyName")}
        <br />
        {t("dataDeletion.emailLabel")} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <br />
        {t("dataDeletion.websiteLabel")}{" "}
        <a href={`https://${WEBSITE}`}>{WEBSITE}</a>
        <br />
        {t("dataDeletion.location")}
      </p>
    </div>
  );
}

export default Datadeletion;
