import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* ─────────── Header bar ─────────── */}
      <header className="top-bar">
        {/* left-hand brand */}
        <h2 className="brand">📚 Book Dash</h2>

        {/* centre toggle buttons */}
        <div className="toggle-group">
          <button
            className={showType === 'table' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
            className={showType === 'card' ? 'toggle-btn active' : 'toggle-btn'}
            onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>

        {/* right-hand nav links */}
        <nav className="nav-links">
          <NavLink to="/about"    className="nav-link">About</NavLink>
          <NavLink to="/features" className="nav-link">Features</NavLink>
          <NavLink to="/contact"  className="nav-link">Contact</NavLink>
        </nav>
      </header>

      {/* ─────────── Main content ─────────── */}
      <main className="page">
        <div className="page-header">
          <h1>Books List</h1>
          <Link to="/books/create" className="add-link" title="Add New Book">
            <MdOutlineAddBox className="add-icon" />
          </Link>
        </div>

        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </main>
    </>
  );
};

export default Home;
