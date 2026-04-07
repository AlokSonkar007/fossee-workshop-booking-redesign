import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/workshop-types">Workshop Types</NavLink>
      <NavLink to="/propose-workshop">Propose Workshop</NavLink>
    </nav>
  )
}

export default Navbar