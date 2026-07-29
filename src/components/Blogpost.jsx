import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import "../styles/blogpost.css";
import { posts } from "../data/blogposts";

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
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const ctaHref = post.cta.type === "calendly" ? CALENDLY_URL : WHATSAPP_URL;

  return (
    <article className="blog-post">
      <img className="blog-post-image" src={post.image} alt={post.title} />

      <div className="blog-post-content">
        <Link to="/blog" className="blog-post-back">
          ← Back to all posts
        </Link>

        <p className="blog-meta">
          {post.date} · {post.readTime}
          {post.hypothetical && (
            <span className="blog-tag">Illustrative example</span>
          )}
        </p>

        <h1 className="blog-post-title">{post.title}</h1>

        <div className="blog-post-body">
          {post.body.map((block, i) => renderBlock(block, i))}
        </div>

        <a href={ctaHref} target="_blank" rel="noreferrer" className="blog-cta">
          {post.cta.label}
        </a>
      </div>
    </article>
  );
}

export default Blogpost;
