// Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import useReveal from "./Hooks/useReveal";

function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    const fullMessage = form.service
      ? `Service requested: ${form.service}\n\n${form.message}`
      : form.message;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: fullMessage,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    console.log(
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    );
  };
  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`contact-info reveal-fade ${visible ? "visible" : ""}`}>
        <p className="contact-eyebrow">GET IN TOUCH</p>
        <h2 className="contact-heading">Let's build your site</h2>
        <p className="contact-sub">
          Reach out directly, or send a message and we'll get back to you within
          1–2 business days.
        </p>

        <div className="contact-detail">
          <span className="detail-label">Address</span>
          <span>Your Street Address, Lagos, Nigeria</span>
        </div>
        <div className="contact-detail">
          <span className="detail-label">Phone</span>
          <a href="tel:+2348078018504">+234 807 801 8504</a>
        </div>
        <div className="contact-detail">
          <span className="detail-label">Email</span>
          <a href="mailto:hello@lines-of-code.com.ng">
            hello@lines-of-code.com.ng
          </a>
        </div>

        <div className="social-row">
          <a
            href="https://wa.me/+2348078018504"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.53 3.69-8.22 8.24-8.22a8.19 8.19 0 0 1 5.82 2.41 8.15 8.15 0 0 1 2.41 5.82c0 4.53-3.7 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/loct"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.31-1.46.72-2.13 1.38A5.87 5.87 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.66.66 1.33 1.07 2.12 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/136076676/admin/dashboard/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@lines_of_code01?_r=1&_t=ZS-988ZuU2zCef"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M16.6 5.82a4.28 4.28 0 0 1-3.29-3.83h-3.1v13.06a2.6 2.6 0 1 1-1.84-2.49v-3.15a5.75 5.75 0 1 0 4.94 5.7V9.4a7.3 7.3 0 0 0 4.13 1.27V7.53a4.28 4.28 0 0 1-.84-1.71z" />
            </svg>
          </a>

          <a
            href="https://x.com/Lines_of_code1"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.9 2H22l-7.6 8.68L23.5 22h-7.02l-5.5-7.19L4.7 22H1.6l8.13-9.29L1 2h7.2l4.97 6.57zm-1.23 18h1.94L7.4 4h-2.1z" />
            </svg>
          </a>
        </div>
      </div>

      <form
        className={`contact-form reveal-fade ${visible ? "visible" : ""}`}
        style={{ transitionDelay: "0.15s" }}
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="service">What do you need?</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select one</option>
            <option value="design">Web Design</option>
            <option value="development">Web Development</option>
            <option value="upgrade">Website Upgrade</option>
            <option value="maintenance">Web Maintenance</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && (
          <p className="form-status success">
            Thanks — we'll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-status error">
            Please fill in all required fields.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
