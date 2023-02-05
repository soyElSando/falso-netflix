import  {useLocation, useNavigate} from "react-router-dom"
import {Banner} from "../../../features"
import "./Detalles.css"

export const Detalles = () => {
    const location = useLocation();
    let element =[]
    element.push(location.state)
    console.log(element)

    const navigate = useNavigate();

    return (
        <div className="container-fluid text-center">
            <Banner movies={element} detalles={true} />
            <button className="btn volver" onClick={() => navigate(-1)}>Volver</button>
        </div>
    );
  };