import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import "./banner.css"


export const Banner = ({movies, detalles}) => {

  const [movie, setMovie] = useState({})

  
  const setRandomMovie = ()  =>{
    const i= Math.floor(Math.random()*movies.length)
    setMovie (movies[i])
  }

  useEffect(() => {
    setRandomMovie()
    const timer = setInterval(() =>{
      setRandomMovie()
    }, 7000)
    return () => clearInterval(timer);
  },[])

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detalles/${movie.id}`, {
      state: movie,
    });
  };
  
  return (
  
  <div className="contenedor d-block" onClick={handleClick}>
    <img src={movie.backdropHigh} className="w-100 m-0 p-0" alt={`Imagen de ${movie.title}`}/>
    <div className={`card-img-overlay ${detalles ? "miBannerDetalles" : "miBanner"}`} >
      <div className="fill-container">
        <p className="card-text text-left opacityBackground p-3"><h1>{movie.title}</h1><br/>{movie.description}</p>
      </div>
    </div> 
  </div>
  
  )
}