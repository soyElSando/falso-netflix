import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand text-danger" to='/'>Falso Netflix</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarDropdown">
                <div className="navbar-nav">
                    <Link className="nav-link" to='/'>Inicio</Link>
                    <Link className="nav-link" to='/peliculas'>Peliculas</Link>
                    <Link className="nav-link" to='/series'>Series</Link>
                </div>
            </div>
            <button className="btn btn-dark">Logout</button>
        </div>
    </nav>
  )
}

export default NavBar