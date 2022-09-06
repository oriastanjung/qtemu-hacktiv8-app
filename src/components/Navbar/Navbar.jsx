import React from 'react'

function Navbar(props) {
  return (
    <nav className="nav">
    <div className="nav-title">
      <h1>{props.title}</h1>
    </div>
    <div className="nav-items">
      <ul className="nav-link">
        <li>Create Meetup</li>
        <li>Explore</li>
      </ul>
      <div className="nav-login">
        <a href="#">Login</a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar