import { useEffect, useState } from "react"
import getRandomMovie from "./getRandomMovie"
import "./banner.css"


export const Banner = () => {

  const [movie, setMovie] = useState({})

  const getMovie = async () => {
    const {backdropHigh,title, description} =  await getRandomMovie()
    setMovie({backdropHigh,title, description})
  }
    
  useEffect(() => {
    getMovie()
    const timer = setInterval(() =>{
      getMovie()
    }, 7000)
    return () => clearInterval(timer);
  
  },[])

    const BASE_URL = "https://image.tmdb.org/t/p/w500"
  
  return (
  
  <div className="contenedor">
    <img src={movie.backdropHigh} className="card-img w-100 m-0 p-0" alt={`Imagen de ${movie.title}`}/>
    <div className="card-img-overlay miBanner" >
      <div className="fill-container">
        <p className="card-text text-left opacityBackground p-3"><h1>{movie.title}</h1><br/>{movie.description}</p>
      </div>
    </div>
  </div>
  
  )
}