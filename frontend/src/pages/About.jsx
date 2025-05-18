// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';   // keep or remove if not using

const About = () => (
  <>
    {/* ─────────── Small header with Back button ─────────── */}
    <header className="about-topbar">
      <Link to="/" className="back-btn">← Back&nbsp;to&nbsp;Home</Link>
    </header>

    {/* ─────────── Main content ─────────── */}
    <div className="page-container about-page">

      {/* Hero / Intro */}
      <section className="hero">
        <h1 className="hero-title">Our Story, Vision &amp; People</h1>
        <p className="hero-sub">
          Book Dash is more than a catalog – it’s a community built around the joy of reading,
          collecting and sharing knowledge. Here’s a deep dive into who we are and where we’re headed.
        </p>
      </section>

      {/* Mission */}
      <section className="mission">
        <h2>📌 Our Mission</h2>
        <p>
          <strong>To make every bookshelf searchable, shareable and universal.</strong><br />
          We believe stories connect humanity. Whether it’s a dusty classic in your local
          library or a brand-new self-published novella, readers deserve seamless access.
          Book Dash empowers individuals, schools and indie bookshops to showcase their
          collections, discover new titles, and preserve literary culture in digital form.
        </p>
      </section>

      {/* Origin Story */}
      <section className="story">
        <h2>📖 How It All Began</h2>
        <p>
          The idea germinated in 2021 when our founder, <em>Amara Khan</em>, volunteered at a community
          library in Karachi. Faced with hand-written ledgers and missing records, Amara spent nights
          building a tiny CRUD app that let volunteers track books in real time. Word spread fast;
          within six months, ten libraries adopted the software. By 2023, the prototype had morphed
          into Book Dash – an open, API-first platform with cloud sync, scanning, and analytics.
        </p>
      </section>

      {/* Team */}
      <section className="team">
        <h2>👩‍💻 The People Behind the Pages</h2>
        <ul>
          <li><strong>Amara Khan – CEO & Lead Engineer</strong><br /> Lover of Urdu poetry, open-source advocate.</li>
          <li><strong>Sami Ullah – Product Designer</strong><br /> Minimalist by day, calligrapher by night.</li>
          <li><strong>Dr. Laila Aziz – Data Scientist</strong><br /> Builds our recommendation engine, reads a book a week.</li>
          <li><strong>Adeel Farooq – Community Lead</strong><br /> Organises #ReadKarachi meet-ups and workshops in schools.</li>
        </ul>
        <p>
          Plus <em>24</em> amazing contributors spanning 9 time-zones – from California to Lahore – who write code,
          translate content, and help moderate forums.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="tech">
        <h2>🛠️ Under the Hood</h2>
        <ul>
          <li><strong>Frontend:</strong> React 18, Vite, TailwindCSS, Zustand</li>
          <li><strong>Backend:</strong> Node.js (Fastify), PostgreSQL, Redis</li>
          <li><strong>Search &amp; ML:</strong> Typesense, Python FastAPI microservice for embeddings</li>
          <li><strong>Mobile:</strong> React Native app (iOS &amp; Android beta)</li>
          <li><strong>DevOps:</strong> Docker, GitHub Actions, Terraform → AWS</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="roadmap">
        <h2>🚀 What’s Next</h2>
        <ol>
          <li><strong>Summer 2025:</strong> Public GraphQL API &amp; Webhooks</li>
          <li><strong>Q4 2025:</strong> Offline-first Progressive Web App</li>
          <li><strong>Early 2026:</strong> Community Marketplace for second-hand books</li>
        </ol>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h2>Join the Journey</h2>
        <p>
          Whether you’re a reader, librarian, developer or investor, we’d love to hear from you.
          Contribute code, request features, or just say hello.
        </p>
        <Link to="/contact" className="cta-btn">Contact Us →</Link>
      </section>
    </div>
  </>
);

export default About;
