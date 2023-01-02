
import { Link } from "react-router-dom";
import { SECCIONES } from "utils/constants";
import{ useAuth, useFetch } from "../../commons";
import { logoutService } from "features/Login/login.services";
import "./navBar.css"

const NavBar = () => {

    const { logout } = useAuth();

    const { setCanFetch } = useFetch(
        logoutService,
        false
    );
    
    const onLogout =() => {
        setCanFetch(true);
        logout();
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top m-0 p-0">
        <h2 className="container-fluid navigationBar w-100">
            <Link className="navbar-brand text-danger logo" to='/'>Falso Netflix</Link>
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
                    {SECCIONES.map(seccion=>{
                        const link="/"+seccion.toLowerCase();
                        return(
                            <Link className="nav-link" to={link}>{seccion}</Link>
                        )
                    })}
                    
                </div>
            </div>
            <button className="btn btn-dark logout" onClick={onLogout}>Logout</button>
        </h2>
    </nav>
  )
}

export default NavBar


//<Link className="nav-link" to='/peliculas'>Peliculas</Link>
//<Link className="nav-link" to='/series'>Series</Link>