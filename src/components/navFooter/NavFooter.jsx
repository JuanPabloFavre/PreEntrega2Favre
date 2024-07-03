import React from 'react'
import './NavFooter.css'
import { Link } from 'react-router-dom'
const NavFooter = () => {
    return (
        <div className='sticky-bottom ' >



            <ul className="navbar   text-info d-flex justify-content-center">
                <li className="nav-item ">
                    <Link to={"/Contacto"} className="nav-link active px-2" aria-current="page">Contacto </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Nosotros"} className="nav-link active px-2" aria-current="page">Sobre Nosotros </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Condiciones"} className="nav-link active px-2" aria-current="page">Terminos y Condiciones</Link>
                </li>
            </ul>


        </div>
    )
}

export default NavFooter