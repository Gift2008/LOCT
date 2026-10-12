import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import useReveal from "./Hooks/useReveal";
import { posts } from "../data/blogposts";
import { useLocale } from "../i18n/LocaleProvider";

function BlogCard({ post, delay }) {
  const [ref, visible] = useReveal();
  const { t } = useLocale();
  const base = `blog.posts.${post.slug}`;

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article
        ref={ref}
        className={`blog-card ${visible ? "visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
      >
        <img
          className="blog-card-image"
          src={post.image}
          alt={t(`${base}.title`)}
        />
        <div className="blog-card-content">
          <p className="blog-meta">
            {t(`${base}.date`)} · {t(`${base}.readTime`)}
            {post.hypothetical && (
              <span className="blog-tag">{t("blog.illustrative")}</span>
            )}
          </p>
          <h3 className="blog-title">{t(`${base}.title`)}</h3>
          <p className="blog-excerpt">{t(`${base}.excerpt`)}</p>
          <span className="blog-toggle">{t("blog.readMore")}</span>
        </div>
      </article>
    </Link>
  );
}

function Blog() {
  const { t } = useLocale();

  return (
    <section id="blog" className="blog">
      <p className="blog-eyebrow">{t("blog.eyebrow")}</p>
      <h2 className="blog-heading">{t("blog.heading")}</h2>

      <div className="blog-grid">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
