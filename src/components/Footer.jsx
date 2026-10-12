import React from "react";
import "../styles/footer.css";
import { useLocale } from "../i18n/LocaleProvider";
function Footer() {
  const { t } = useLocale();
  return (
    <div>
      <div className="up">
        <p>Lines Of Code Technologies Limited</p>
        <span>
          RC:9689529 | Lagos, Nigeria |{" "}
          <a href="tel:+23408078018504">08078018504</a>{" "}
        </span>
        <br />
        <span>
          <a href="/privacy-policy">{t("footer.privacy")}</a> |{" "}
          <a href="/data-deletion">{t("footer.dd")}</a>
        </span>
        <br />
        <small>
          {" "}
          &copy; 2026 Lines Of Code Technologies RC: 9689529.{" "}
          {t("footer.rights")}.
        </small>
      </div>
    </div>
  );
}

export default Footer;
