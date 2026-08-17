import { useState } from 'react';
import { navItems } from '../data/siteData.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Tuer Accommodations home"
        >
          <span className="brand-mark">TA</span>

          <span className="brand-copy">
            <strong>Tuer</strong>
            <span>Accommodations</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}