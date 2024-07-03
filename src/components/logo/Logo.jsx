import React from 'react'
import Marca from '../../assets/logo.png'
import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div >

            <Link to={"/"} >

                <img src={Marca} alt="logo" className='logo-empresa' />

            </Link>

        </div>
    )
}

export default Logo