import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <span className="walid">Walid</span>Booking
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
