import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigationData } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import logo from '../../assets/logo.svg';
import styles from './Header.module.css';

/**
 * Sticky global Header component.
 * Integrates responsive states, keyboard-accessible desktop mega menus,
 * search overlays, and mobile accordion drawers.
 */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenuIdx, setActiveMenuIdx] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Scroll effect to make header compact
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setActiveMenuIdx(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}" (This is a demo search implementation)`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link to="/" className={styles.logoLink} aria-label="Arcade University Home">
          <img src={logo} className={styles.logo} alt="Arcade University Crest" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navigationData.map((item, idx) => (
            <div
              key={idx}
              className={styles.navItemWrapper}
              onMouseEnter={() => setActiveMenuIdx(idx)}
              onMouseLeave={() => setActiveMenuIdx(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`
                }
                end={item.path === '/'}
              >
                {item.title}
              </NavLink>
              {/* Desktop Mega Menu Dropdown */}
              <MegaMenu
                item={item}
                active={activeMenuIdx === idx}
                scrolled={scrolled}
                onClose={() => setActiveMenuIdx(null)}
              />
            </div>
          ))}
        </nav>

        {/* Header CTAs (Search, Apply, Hamburger) */}
        <div className={styles.actions}>
          {/* Search Toggle Button */}
          <button
            className={styles.actionBtn}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle Search"
            aria-expanded={searchOpen}
          >
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Apply Now Button */}
          <Link to="/admissions/application-process" className={styles.applyBtn}>
            Apply Now
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className={styles.searchOverlay} onClick={() => setSearchOpen(false)}>
          <form
            className={styles.searchForm}
            onSubmit={handleSearchSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="search"
              placeholder="Search courses, faculty, research papers..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className={styles.searchSubmitBtn}>
              Search
            </button>
            <button
              type="button"
              className={styles.searchCloseBtn}
              onClick={() => setSearchOpen(false)}
            >
              &times;
            </button>
          </form>
        </div>
      )}

      {/* Mobile Accordion Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationData={navigationData}
      />
    </header>
  );
};

export default Header;
