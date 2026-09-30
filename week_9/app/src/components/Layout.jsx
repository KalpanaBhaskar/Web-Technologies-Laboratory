import { Link, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16v2H4V4zm0 7h10v2H4v-2zm0 7h14v2H4v-2z" />
              </svg>
            </span>
            Inkwell
          </Link>

          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/archive" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Archive
            </NavLink>
            <NavLink to="/create">
              {({ isActive }) => (
                <span className={`btn-primary${isActive ? '' : ''}`} style={{ marginLeft: '0.5rem' }}>
                  Write
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          Inkwell — Blog Post Management System
        </div>
      </footer>
    </div>
  );
}
