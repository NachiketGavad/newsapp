import React from 'react'

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">{props.aboutText}</a>
        </li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">business</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">entertainment</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">general</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">health</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">science</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">sports</a></li>
        <li className="nav-item"><a className="nav-link" aria-current="page" href="#">technology</a></li>
      </ul>
    </div>
        <div className={`navbar-nav form-check form-switch mt-2 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{props.togglebtn}</label>
      </div>
  </div>
</nav>
  )
}