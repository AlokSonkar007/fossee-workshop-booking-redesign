import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <NavLink to="/" className="brand">
          <span>FOSSEE</span> Workshops
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/register" className="nav-link">Register</NavLink>
          <NavLink to="/workshop-types" className="nav-link">Workshop Types</NavLink>
          <NavLink to="/propose-workshop" className="nav-link">Propose Workshop</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar