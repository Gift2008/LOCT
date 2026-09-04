// DataDeletion.jsx
import React from "react";
import "../styles/legal.css";
import useTitles from "./Hooks/useTitles";

function Datadeletion() {
  useTitles("Data Deletion | Lines of Code Technologies");

  return (
    <div className="legal-page">
      <h1>Data Deletion Instructions</h1>
      <p className="legal-meta">
        <strong>Last Updated:</strong> August 26, 2026
      </p>
      <p className="legal-meta">
        <strong>Company:</strong> Lines Of Codes Technologies Limited — RC:
        9689529
      </p>

      <h2>Request Deletion of Your Personal Data</h2>
      <p>
        If you want us to delete the personal data we collected about you
        through our website, WhatsApp Business API, or Meta Conversions API,
        follow the steps below.
      </p>

      <h2>How to Request Deletion</h2>
      <p>
        Send an email to <strong>hello@lines-of-code.com.ng</strong> with the
        subject line: <strong>"Data Deletion Request"</strong>
      </p>
      <p>Please include:</p>
      <ol>
        <li>Your phone number, email address, or WhatsApp number</li>
        <li>The name of the business you interacted with</li>
        <li>Any details that can help us locate your data in our system</li>
      </ol>

      <h2>What Happens Next</h2>
      <ul>
        <li>
          <strong>Step 1:</strong> We will acknowledge your request within 5
          business days
        </li>
        <li>
          <strong>Step 2:</strong> We will delete your data from systems under
          our control
        </li>
        <li>
          <strong>Step 3:</strong> We will send you a confirmation email within
          14 business days
        </li>
      </ul>

      <h2>Important Notes</h2>
      <ul>
        <li>
          We act as a technical service provider for our clients. If you also
          gave data directly to a client, please contact that business to
          request deletion from their systems.
        </li>
        <li>
          Data processed by Meta/WhatsApp is subject to Meta's own data
          policies.
        </li>
        <li>
          We may retain certain data if required by law, such as financial
          records for tax purposes.
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        Lines Of Codes Technologies Limited
        <br />
        Email:{" "}
        <a href="mailto:hello@lines-of-code.com.ng">
          hello@lines-of-code.com.ng
        </a>
        <br />
        Website:{" "}
        <a href="https://www.lines-of-code.com.ng">www.lines-of-code.com.ng</a>
        <br />
        Lagos, Nigeria
      </p>
    </div>
  );
}

export default Datadeletion;
