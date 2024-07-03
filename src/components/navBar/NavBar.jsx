import CartWidget from '../cartWidget/CartWidget'
import Logo from '../logo/Logo'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'

const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div className="container-fluid navbar border-bottom border-body p-3" data-bs-theme="dark">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <Link to="/"><Logo /></Link>
                        <ul className="navbar-nav me-auto mb-20 m-10 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" > Todos </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </Link>
                                <ul className="dropdown-menu">
                                    <li> <Link to="/category/Camisetas" className="dropdown-item">Camisetas</Link></li>
                                    <li> <Link to="/category/Shorts" className="dropdown-item">Shorts</Link></li>
                                    <li> <Link to="/category/Medias" className="dropdown-item">Medias</Link></li>
                                    <li><Link to="/category/Zapatos" className="dropdown-item">Zapatos</Link></li>
                                    <li><Link to="/category/Otros" className="dropdown-item">Otros</Link></li>
                                </ul>
                            </li>


                        </ul>

                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search"></input>
                            <button className="btn btn-success btn-lg" type="submit">Buscar</button>
                        </form>


                        <Link to={Cart}><CartWidget /></Link>
                    </div>
                </div>
            </nav>


        </>

    )

}

export default NavBar