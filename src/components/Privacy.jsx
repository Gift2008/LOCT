// Privacy.jsx
import React from "react";
import "../styles/legal.css";
import useTitles from "./Hooks/useTitles";

function Privacy() {
  useTitles("Privacy Policy | Lines of Code Technologies");

  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-meta">
        <strong>Last Updated:</strong> August 31, 2026
      </p>
      <p className="legal-meta">
        <strong>Company:</strong> Lines Of Codes Technologies Limited — RC:
        9689529
      </p>

      <h2>1. Introduction</h2>
      <p>
        Lines Of Codes Technologies Limited ("we", "us") respects your privacy.
        This policy explains how we collect, use, and protect your personal data
        when you interact with us via our website, WhatsApp Business API, or our
        AI assistant "Ayo".
      </p>

      <h2>2. Data We Collect</h2>
      <p>We collect only data needed to serve you:</p>
      <ul>
        <li>
          <strong>Contact Data:</strong> Name, phone number, email address,
          WhatsApp number
        </li>
        <li>
          <strong>Business Data:</strong> Company name, website, industry,
          project requirements
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, device info, chat logs
          from WhatsApp/website
        </li>
      </ul>

      <h2>3. How We Use Your Data</h2>
      <p>We use your data to:</p>
      <ul>
        <li>Respond to inquiries and scope projects</li>
        <li>
          Deliver services: Website Development, AI Automation, Ads, Data &
          Cybersecurity
        </li>
        <li>Send invoices and payment links</li>
        <li>Improve our AI assistant "Ayo" and customer experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Data Storage & Security</h2>
      <p>
        Each client's data is stored in an isolated ticket and workflow
        namespace. Data is never shared between clients. Sensitive information
        like API keys and passwords are collected only via secure one-time
        submission links, never in chat.
      </p>

      <h2>5. Data Sharing</h2>
      <p>We do not sell your data. We may share data with:</p>
      <ul>
        <li>
          <strong>Meta/WhatsApp:</strong> As part of using WhatsApp Business API
        </li>
        <li>
          <strong>Payment Processors:</strong> Paystack, Payoneer for billing
        </li>
        <li>
          <strong>Our Specialists:</strong> Only on a need-to-know basis for
          your project
        </li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>
        Under NDPC law, you have the right to access, correct, or delete your
        data. To delete your data, see our{" "}
        <a href="/data-deletion">Data Deletion Instructions</a>.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We keep your data for the duration of our business relationship + 2
        years for legal/accounting purposes, unless you request deletion.
      </p>

      <h2>8. Contact Us</h2>
      <p>If you have questions about this policy, contact us:</p>
      <p>
        Email:{" "}
        <a href="mailto:hello@lines-of-code.com.ng">
          hello@lines-of-code.com.ng
        </a>
        <br />
        Website:{" "}
        <a href="https://www.lines-of-code.com.ng">www.lines-of-code.com.ng</a>
        <br />
        Address: Lagos, Nigeria
      </p>
    </div>
  );
}

export default Privacy;
