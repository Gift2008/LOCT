import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";
import useReveal from "./Hooks/useReveal";
import { posts } from "../data/blogposts";

function BlogCard({ post, delay }) {
  const [ref, visible] = useReveal();

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <article
        ref={ref}
        className={`blog-card ${visible ? "visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
      >
        <img className="blog-card-image" src={post.image} alt={post.title} />
        <div className="blog-card-content">
          <p className="blog-meta">
            {post.date} · {post.readTime}
            {post.hypothetical && (
              <span className="blog-tag">Illustrative example</span>
            )}
          </p>
          <h3 className="blog-title">{post.title}</h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <span className="blog-toggle">Read more →</span>
        </div>
      </article>
    </Link>
  );
}

function Blog() {
  return (
    <section id="blog" className="blog">
      <p className="blog-eyebrow">RESOURCES</p>
      <h2 className="blog-heading">
        Straight talk on websites that actually work
      </h2>

      <div className="blog-grid">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
