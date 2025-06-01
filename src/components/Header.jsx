import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">CareDuel</div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/duels">Duels</a>
        <a href="/submit">Submit</a>
      </nav>

      <div className="header-right">
        <div className="user-menu" title="User menu placeholder">
          <img src="/woman.png" alt="User" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </div>

        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
