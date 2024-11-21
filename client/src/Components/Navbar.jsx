import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <div className="container-fluid main_menu">
        <div className="row">
            <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                      <a className="navbar-brand " href="/"> <i className="fa-sharp fa-solid fa-snowflake fa-spin fa-spin-reverse"></i> CVbuilder <i className="fa-sharp fa-solid fa-snowflake fa-spin fa-spin-reverse"></i></a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/cv">Build CV</NavLink>
                          </li>
                         
                          
                        
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                          </li>
                          
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/about">About Me</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                          </li>
                       
                        </ul>
                        
                      </div>
                    </div>
                  </nav>
            </div>
        </div>
   </div>
    </>
  )
}

export default Navbar