import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../styles/blogpost.css";
import { posts } from "../data/blogposts";
import { useLocale } from "../i18n/LocaleProvider";

const CALENDLY_URL = "https://calendly.com/hello-lines-of-code/15min";
const WHATSAPP_URL = "https://wa.me/+2348078018504";

function renderBlock(block, i) {
  if (block.type === "h4") return <h4 key={i}>{block.text}</h4>;
  if (block.type === "p") return <p key={i}>{block.text}</p>;
  if (block.type === "ul") {
    return (
      <ul key={i}>
        {block.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

function Blogpost() {
  const { slug } = useParams();
  const { t, tRaw } = useLocale();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const base = `blog.posts.${slug}`;
  const rawBody = tRaw(`${base}.body`);
  const body = Array.isArray(rawBody) ? rawBody : [];
  const ctaHref = post.ctaType === "calendly" ? CALENDLY_URL : WHATSAPP_URL;

  return (
    <article className="blog-post">
      <img
        className="blog-post-image"
        src={post.image}
        alt={t(`${base}.title`)}
      />

      <div className="blog-post-content">
        <Link to="/blog" className="blog-post-back">
          {t("blog.backToPosts")}
        </Link>

        <p className="blog-meta">
          {t(`${base}.date`)} · {t(`${base}.readTime`)}
          {post.hypothetical && (
            <span className="blog-tag">{t("blog.illustrative")}</span>
          )}
        </p>

        <h1 className="blog-post-title">{t(`${base}.title`)}</h1>

        <div className="blog-post-body">
          {body.map((block, i) => renderBlock(block, i))}
        </div>

        <a href={ctaHref} target="_blank" rel="noreferrer" className="blog-cta">
          {t(`${base}.ctaLabel`)}
        </a>
      </div>
    </article>
  );
}

export default Blogpost;
