import { useEffect, useRef, useState } from 'react';
import { ASSETS, NAV_LINKS, SERVICE_CATEGORIES } from '../data/content.js';

export function selectServiceCategory(id) {
  window.dispatchEvent(new CustomEvent('ideo:select-service', { detail: id }));
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const lastY = useRef(0);

  // Hide on scroll down, reveal on scroll up; darken once past the top.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 200 && !mobileOpen);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen]);

  // Close the Service menu on outside click / Escape.
  useEffect(() => {
    if (!menuOpen && !mobileOpen) return undefined;
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); setMobileOpen(false); }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen, mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const pick = (id) => {
    setMenuOpen(false);
    setMobileOpen(false);
    selectServiceCategory(id);
  };

  return (
    <header
      className={`nav ${hidden ? 'nav--hidden' : ''} ${scrolled ? 'nav--scrolled' : ''} ${mobileOpen ? 'nav--open' : ''}`}
    >
      <div className="nav__bar container">
        <div className="nav__left">
          <a href="#top" className="nav__logo" aria-label="IDEO home">
            <img src={ASSETS.logo} alt="IDEO" width="158" height="56" />
          </a>
          <nav aria-label="Primary">
            <ul className="nav__links">
              {NAV_LINKS.map((link) =>
                link.hasMenu ? (
                  <li
                    key={link.label}
                    className="nav__has-menu"
                    ref={menuRef}
                    onMouseEnter={() => setMenuOpen(true)}
                    onMouseLeave={() => setMenuOpen(false)}
                  >
                    <button
                      className="nav__item"
                      aria-expanded={menuOpen}
                      aria-controls="service-menu"
                      onClick={() => setMenuOpen((v) => !v)}
                    >
                      {link.label}
                      <img src={ASSETS.chevron} alt="" width="14" height="14" className="nav__chevron" />
                    </button>
                    <ul id="service-menu" className={`nav__menu ${menuOpen ? 'is-open' : ''}`}>
                      {SERVICE_CATEGORIES.map((c, i) => (
                        <li key={c.id}>
                          <button className="nav__menu-item" onClick={() => pick(c.id)} tabIndex={menuOpen ? 0 : -1}>
                            <span>{c.label}</span>
                            <span className="nav__menu-num">0{i + 1}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a className="nav__item" href={link.href}>{link.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
        <a href="#contact" className="btn btn--primary btn--sm nav__cta">Contact</a>
        <button
          className="nav__burger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div id="mobile-menu" className="nav__mobile" hidden={!mobileOpen}>
        <ul>
          {NAV_LINKS.filter((l) => !l.hasMenu).map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
            </li>
          ))}
          {SERVICE_CATEGORIES.map((c) => (
            <li key={c.id}>
              <button onClick={() => pick(c.id)}>{c.label.charAt(0) + c.label.slice(1).toLowerCase()}</button>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn--primary" onClick={() => setMobileOpen(false)}>Contact</a>
      </div>
    </header>
  );
}
