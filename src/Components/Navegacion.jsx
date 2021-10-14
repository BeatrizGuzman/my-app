import React from 'react'
import { Link } from 'react-router-dom'
import pic from './../assets/pic.png'

function Navegacion() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <Link className="navbar-brand" to='/' >
                <center>
                    <h1 style={{ color: "white"}}>COMODYET</h1>
                    <img className="pic" src={pic} alt='carrito'/>
                    <i className="material-icons" style={{ color: "white"}}> Una E-commerce de prendas únicas destinada especialmente para vos </i>
                </center>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to='/' style={{ color: "white"}}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/nosotros' style={{ color: "white"}}>Quienes somos :)</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navegacion