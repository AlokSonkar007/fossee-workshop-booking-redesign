import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-top-row">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            <span>FOSSEE</span> Workshops
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>

        <nav className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/login" className="nav-link" onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link" onClick={closeMenu}>
            Register
          </NavLink>
          <NavLink to="/workshop-types" className="nav-link" onClick={closeMenu}>
            Workshop Types
          </NavLink>
          <NavLink to="/profile" className="nav-link" onClick={closeMenu}>
            Profile
          </NavLink>
          <NavLink to="/workshop-status" className="nav-link" onClick={closeMenu}>
            Workshop Status
          </NavLink>
          <NavLink to="/propose-workshop" className="nav-link" onClick={closeMenu}>
            Propose Workshop
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar