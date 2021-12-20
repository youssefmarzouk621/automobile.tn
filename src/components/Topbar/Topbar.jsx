import "./topbar.css";
import React from 'react'
import {

Link
} from "react-router-dom"
function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <a href="mailto:aymenouerghui0@gmail.com">

          <i className="topIcon fas fa-envelope-square"></i>
        </a>
        <a href="https://github.com/aymenouer">

          <i className="topIcon fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/aymen-ouerghi-249632146/">

          <i className="topIcon fab fa-linkedin"></i>
        </a>
        <a href="https://aymenouer.github.io/portfolio">
    
          <i className="topIcon fab fa-pinterest-square"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem">ADD</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
          <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
