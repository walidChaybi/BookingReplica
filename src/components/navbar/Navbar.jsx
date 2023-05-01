import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="link" to="/">
          <span className="logo">
            <span className="walid">Walid{`<`}Booking</span>
          </span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
