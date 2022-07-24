import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark " style={{"backgroundColor":"#B09B71"}}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" style={{"color":"#61481C"}} to="/">Worlds Today</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2"><NavLink className="nav-NavLink" aria-current="page" to="/"  style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Home</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/business" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Business</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/entertainment" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Entertainment</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/general" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>General</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/health" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Health</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/science" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Science</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/sports" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Sports</NavLink></li>
        <li className="nav-item mx-1"><NavLink className="nav-NavLink" to="/technology" style={isActive => ({
    color: isActive ? "#100F0F" : "white"
  })}>Technology</NavLink></li>
        {/* <li className="nav-item dropdown">
          <a className="nav-NavLink dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-NavLink disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
