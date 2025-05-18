import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi'; 
import './Features.css';

const Features = () => (
  <>
    {/* ────────── Mini-header with back button ────────── */}
    <header className="subheader">
      <Link to="/" className="back-link">
        <HiArrowNarrowLeft className="back-icon" />
        Back Home
      </Link>
      <h1 className="subheader-title">App Features</h1>
    </header>

    {/* ────────── Feature content ────────── */}
    <section className="page-container">
      <p className="intro">
        Welcome to <strong>Book Dash</strong> – a lightweight yet powerful
        catalog app crafted for readers, librarians, and collectors alike.
        Below you’ll find an in-depth look at the functionality baked into
        the current version and a glimpse of what’s coming next.
      </p>

      {/* Core Features */}
      <h2 className="section-heading">Core Capabilities</h2>
      <ul className="feature-list">
        <li>
          <strong>Dual Layouts&nbsp;–&nbsp;Table &amp; Card.</strong>  
          Switch instantly between a spreadsheet-style overview and an elegant
          card grid. Perfect for bulk editing or relaxed browsing.
        </li>
        <li>
          <strong>CRUD Made Effortless.</strong>  
          Add new titles, edit existing metadata, or remove outdated entries
          in seconds. Inline validation prevents accidental mistakes.
        </li>
        <li>
          <strong>Responsive from Day One.</strong>  
          Touch-friendly controls, fluid grids, and optimized assets ensure
          smooth navigation on phones, tablets, laptops, and ultra-wide monitors.
        </li>
        <li>
          <strong>Lightning-Fast UX.</strong>  
          State is locally cached; UI updates happen optimistically, so you
          rarely wait for the network. Spinner only appears when absolutely
          necessary.
        </li>
      </ul>

      {/* Quality-of-Life */}
      <h2 className="section-heading">Quality-of-Life Enhancements</h2>
      <ul className="feature-list">
        <li>
          <strong>Smart Search &amp; Filters.</strong>  
          Instantly pinpoint books by title, author, genre, or ISBN. Stacked
          filters make large libraries manageable.
        </li>
        <li>
          <strong>Dark Mode&nbsp;(toggle in header).</strong>  
          Eye-strain-free reading late at night, with hues carefully selected
          for true WCAG contrast.
        </li>
        <li>
          <strong>Keyboard Shortcuts.</strong>  
          Power users can press <kbd>N</kbd> to add a book, <kbd>/</kbd> to
          focus the search bar, or <kbd>?</kbd> for a full shortcut map.
        </li>
        <li>
          <strong>Bulk Import &amp; Export (CSV/JSON).</strong>  
          Migrate to or from Book Dash without data loss – perfect for school
          libraries or personal spreadsheets.
        </li>
      </ul>

      {/* Roadmap */}
      <h2 className="section-heading">Roadmap &mdash; What’s Next?</h2>
      <ul className="feature-list">
        <li>
          <strong>Cloud Sync.</strong>  
          Seamless backup across devices and optional team libraries.
        </li>
        <li>
          <strong>Cover Art Fetching.</strong>  
          Auto-pull high-resolution jackets from Open Library when an ISBN is
          present.
        </li>
        <li>
          <strong>Reading Stats Dashboard.</strong>  
          Visualize pages read per week, genre distribution, and streaks.
        </li>
        <li>
          <strong>Mobile-First Native App.</strong>  
          React Native port with offline mode and barcode scanning.
        </li>
      </ul>

      {/* Call to Action */}
      <p className="outro">
        <em>Thank you for exploring Book Dash!</em>  
        We’re committed to continuous improvement – feedback and feature
        requests are always welcome.
      </p>
    </section>
  </>
);

export default Features;
