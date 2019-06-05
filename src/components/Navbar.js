import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <a></a>
        <a class="nav-links" href="/home">Home</a>
        <a class="nav-links" href="/about">About Me</a>
        <a class="nav-links" href="/projects">Projects</a>
        <a class="nav-links" href="/contact">Contact</a>
        <a></a>
      </nav>
    </div>
  )
}

export default Navbar;