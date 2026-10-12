// Privacy.jsx
import React from "react";
import "../styles/legal.css";
import useTitles from "./Hooks/useTitles";
import { useLocale } from "../i18n/LocaleProvider";
function Privacy() {
  useTitles("Privacy Policy | Lines of Code Technologies");

  const { t } = useLocale();

  return (
    <div className="legal-page">
      <h1>{t("privacy.heading")} </h1>
      <p className="legal-meta">
        <strong>
          {t("privacy.lastu")} {t("privacy.date")}
        </strong>
      </p>
      <p className="legal-meta">
        <strong>{t("privacy.c")}:</strong> {t("privacy.c1")}
      </p>

      <h2>{t("privacy.introh")}</h2>
      <p>{t("privacy.introb")}</p>

      <h2>{t("privacy.datah")}</h2>
      <p>{t("privacy.datas")}</p>
      <ul>
        <li>
          <strong>{t("privacy.datab1")}</strong> {t("privacy.datab1a")}
        </li>
        <li>
          <strong>{t("privacy.datab2")}</strong> {t("privacy.datab2a")}
        </li>
        <li>
          <strong>{t("privacy.datab3")}</strong> {t("privacy.datab3a")}
        </li>
      </ul>

      <h2>{t("privacy.howh")}</h2>
      <p>{t("privacy.hows")}</p>
      <ul>
        <li>{t("privacy.howb1")}</li>
        <li>{t("privacy.howb2")}</li>
        <li>{t("privacy.howb3")}</li>
        <li>{t("privacy.howb4")}</li>
        <li>{t("privacy.howb5")}</li>
      </ul>

      <h2>{t("privacy.dsh")}</h2>
      <p>{t("privacy.dsb")}</p>

      <h2>{t("privacy.dsah")}</h2>
      <p>{t("privacy.dsas")}</p>
      <ul>
        <li>
          <strong>{t("privacy.dsab1")}</strong>
          {t("privacy.dsab1a")}
        </li>
        <li>
          <strong>{t("privacy.dsab2a")}</strong> {t("privacy.dsab2a")}
        </li>
        <li>
          <strong>{t("privacy.dsab3")}</strong>
          {t("privacy.dsab3a")}
        </li>
      </ul>

      <h2>{t("privacy.righth")}</h2>
      <p>
        {t("privacy.rightb")}
        <a href="/data-deletion">{t("privacy.rightl")}</a>.
      </p>

      <h2>{t("privacy.datarh")}</h2>
      <p>{t("privacy.datarb")}</p>

      <h2>{t("privacy.contacth")}</h2>
      <p>{t("privacy.contactb")}</p>
      <p>
        {t("privacy.contacteH")}{" "}
        <a href="mailto:hello@lines-of-code.com.ng">{t("privacy.contacteL")}</a>
        <br />
        {t("privacy.contactwH")}{" "}
        <a href="https://www.lines-of-code.com.ng">{t("privacy.contactwL")}</a>
        <br />
        {t("privacy.contacta")}
      </p>
    </div>
  );
}

export default Privacy;
