import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const getNavClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

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
          <NavLink to="/" className={getNavClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/login" className={getNavClass} onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink to="/register" className={getNavClass} onClick={closeMenu}>
            Register
          </NavLink>
          <NavLink to="/workshop-types" className={getNavClass} onClick={closeMenu}>
            Workshop Types
          </NavLink>
          <NavLink to="/profile" className={getNavClass} onClick={closeMenu}>
            Profile
          </NavLink>
          <NavLink to="/workshop-status" className={getNavClass} onClick={closeMenu}>
            Workshop Status
          </NavLink>
          <NavLink to="/propose-workshop" className={getNavClass} onClick={closeMenu}>
            Propose Workshop
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar