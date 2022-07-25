import React from 'react'
import logo from '../../assets/img/logo.svg'
const Navbar = () => {
  return (
    <div>
              <nav className="navbar navbar-expand-lg bg-transparent position-absolute w-100">
                  <div className="container">
                      <a className="navbar-brand" href="#">
                      <img src={logo} className="img-fluid" alt="" />
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                  <a className="nav-link active fs-5 text-black fw-bold pe-5" aria-current="page" href="#">Home</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link fs-5 text-black fw-bold pe-5" href="#">Service</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link fs-5 text-black fw-bold pe-5" href="#">About Us</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link fs-5 text-black fw-bold pe-5" href="#">contact</a>
                              </li>
                           
                          </ul>
                      
                      </div>
                  </div>
              </nav>
    </div>
  )
}

export default Navbar