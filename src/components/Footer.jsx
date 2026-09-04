import React from "react";
import "../styles/footer.css";
function Footer() {
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
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/data-deletion"> Data Deletion</a>
        </span>
        <br />
        <small>
          {" "}
          &copy; 2026 Lines Of Code Technologies RC: 9689529. All rights
          reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
