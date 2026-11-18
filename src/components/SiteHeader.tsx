import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { industries } from '../data/industries';
import { ChevronDown, CloseIcon, MenuIcon } from './Icons';
import logo from '../assets/images/sdfm-logo.png';
import './SiteHeader.css';

const navLinks = [
  { label: 'Guides', href: '/guides' },
  { label: 'Custom builds', href: '/custom-builds' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const ddButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close everything when the route changes
  useEffect(() => {
    setDdOpen(false);
    setMenuOpen(false);
    setIndOpen(false);
  }, [location.pathname, location.hash]);

  // Desktop dropdown: close on Esc or a click outside
  useEffect(() => {
    if (!ddOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDdOpen(false);
        ddButtonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!ddRef.current?.contains(e.target as Node)) setDdOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [ddOpen]);

  // Mobile menu: close on Esc
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const hoverCapable = () => window.matchMedia('(hover: hover)').matches;

  return (
    <header id="header" className="site-header">
      <div className="wrap site-header__bar">
        <Link to="/" aria-label="SDFM Group home" className="site-header__logo">
          <img src={logo} alt="SDFM Group Limited" width={153} height={34} />
        </Link>

        <nav aria-label="Main" className="site-header__nav">
          <div
            ref={ddRef}
            className="dd"
            onMouseEnter={() => hoverCapable() && setDdOpen(true)}
            onMouseLeave={() => hoverCapable() && setDdOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setDdOpen(false);
            }}
          >
            <button
              ref={ddButtonRef}
              type="button"
              className="dd__toggle"
              aria-expanded={ddOpen}
              aria-controls="industries-menu"
              onClick={() => setDdOpen((o) => !o)}
            >
              Industries
              <ChevronDown className={`chev${ddOpen ? ' chev--open' : ''}`} />
            </button>
            <div id="industries-menu" className="dd__menu" hidden={!ddOpen}>
              {industries.map((it) => (
                <NavLink key={it.href} to={it.href} className="dd__item">
                  <span className="dot" aria-hidden="true" />
                  {it.label}
                </NavLink>
              ))}
            </div>
          </div>
          {navLinks.map((l) => (
            <NavLink key={l.href} to={l.href} className="navlink">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to="/ai-gap-check" className="btn-primary site-header__cta" data-event="click_ai_check" data-location="header">
            Free AI check
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav id="mobile-menu" aria-label="Main" className="mobile-menu" hidden={!menuOpen}>
        <button
          type="button"
          className="mobile-menu__row mobile-menu__toggle"
          aria-expanded={indOpen}
          aria-controls="mobile-industries"
          onClick={() => setIndOpen((o) => !o)}
        >
          Industries
          <ChevronDown size={18} className={`chev${indOpen ? ' chev--open' : ''}`} />
        </button>
        <div id="mobile-industries" className="mobile-menu__sub" hidden={!indOpen}>
          {industries.map((it) => (
            <NavLink key={it.href} to={it.href} className="navlink mobile-menu__subitem">
              <span className="dot" aria-hidden="true" />
              {it.label}
            </NavLink>
          ))}
        </div>
        {navLinks.map((l) => (
          <NavLink key={l.href} to={l.href} className="navlink mobile-menu__row">
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
