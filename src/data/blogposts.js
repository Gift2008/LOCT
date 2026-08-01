import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.png";

export const posts = [
  {
    slug: "website-pricing-2026",
    title: "Website Pricing in Nigeria 2026: What Should You Really Pay?",
    date: "July 2026",
    readTime: "4 min read",
    hypothetical: false,
    image: pic1,
    excerpt:
      "If you've asked 3 developers for a website quote in Lagos, you've probably gotten 3 wildly different prices. Here's why.",
    body: [
      {
        type: "p",
        text: "If you've asked 3 developers for a website quote in Lagos, you've probably gotten 3 wildly different prices. ₦80k, ₦500k, ₦1.5M. Why?",
      },
      { type: "h4", text: "The 3 Types of Websites in Nigeria Right Now" },
      {
        type: "ul",
        items: [
          '₦50k – ₦150k: The "Brochure" Site — Looks fine. No strategy. No leads. It\'s just online.',
          '₦200k – ₦700k: The "Growth" Site — Mobile, fast, WhatsApp chat, SEO basics. Built to get you customers.',
          '₦800k – ₦3M: The "Dominance" Site — Full sales machine. SEO blog, ads, booking system, analytics. This pays for itself.',
        ],
      },
      { type: "h4", text: "So what should YOU pay for?" },
      {
        type: "p",
        text: 'Ask this: "Will this website bring me customers in the next 90 days?" If the answer is no, it\'s too cheap.',
      },
      {
        type: "p",
        text: "At LOC, we only build 2 types: GROWTH ₦50k/mo and DOMINANCE ₦100k/mo.",
      },
    ],
    cta: {
      label: "Chat us to see which one fits your business",
      type: "whatsapp",
    },
  },
  {
    slug: "whatsapp-widget-case-study",
    title: "How One WhatsApp Chat Widget Got Our Client 13 Leads in 8 Days",
    date: "July 2026",
    readTime: "3 min read",
    hypothetical: true,
    image: pic3,
    excerpt:
      "A skincare brand in Lagos had 200 weekly visitors and 0 sales. Here's the one change that fixed it.",
    body: [
      {
        type: "p",
        text: "Client: A skincare brand in Lagos. Problem: 200 people visited their site weekly. 0 sales.",
      },
      { type: "h4", text: "What was wrong?" },
      {
        type: "p",
        text: 'People had questions: "Do you deliver to Abuja?" "Is this for oily skin?" But there was no way to ask. So they left.',
      },
      { type: "h4", text: "What we did in 10 minutes" },
      {
        type: "p",
        text: 'We installed a chat widget + connected WhatsApp. Added 1 line: "Hi 👋 Quick question? We reply in 2 mins"',
      },
      { type: "h4", text: "The Result" },
      {
        type: "ul",
        items: [
          "Day 1–3: 4 chats. 2 became customers",
          "Day 4–7: 11 total chats. 5 became customers",
          "Revenue: ₦127,000 from 1 free tool",
        ],
      },
      {
        type: "p",
        text: "Lesson: Your website isn't a billboard. It's a sales rep. If no one can talk to you, you're losing money.",
      },
    ],
    cta: { label: "Get WhatsApp Chat Setup for Free", type: "calendly" },
  },
  {
    slug: "why-nigerian-websites-dont-sell",
    title: "Why Most Nigerian Business Websites Don't Sell in 2026",
    date: "July 2026",
    readTime: "5 min read",
    hypothetical: true,
    image: pic2,
    excerpt:
      "You spent ₦200k on a website. It's beautiful. But crickets. Here's why.",
    body: [
      {
        type: "p",
        text: "You spent ₦200k on a website. It's beautiful. But crickets. Here's why:",
      },
      { type: "h4", text: "Mistake 1: No Offer" },
      {
        type: "p",
        text: '"Welcome to our website" — that\'s not an offer. Fix: "Book Free 15-min Website Audit" or "Get 10% off this week."',
      },
      { type: "h4", text: "Mistake 2: No Way to Talk to You" },
      {
        type: "p",
        text: "Contact form that goes to spam. No WhatsApp. Fix: a live chat widget. 80% of Nigerians will chat before they call.",
      },
      { type: "h4", text: "Mistake 3: No Proof" },
      {
        type: "p",
        text: "No testimonials, no portfolio, no team photo. Fix: Add 2 case studies + 3 client logos. Trust = Sales.",
      },
      { type: "h4", text: "Mistake 4: Slow + Not on Mobile" },
      {
        type: "p",
        text: "If it loads in 6 seconds, 50% of people leave. Fix: Test your site speed. Use a CDN. Compress images.",
      },
      { type: "h4", text: "The LOC Fix" },
      {
        type: "p",
        text: "We check all 4 for free. In 15 minutes we'll tell you exactly what's killing your sales.",
      },
    ],
    cta: { label: "Fix My Website — Book Free Audit", type: "calendly" },
  },
];
