import { useEffect, useState } from "react"
import getRandomMovie from "./getRandomMovie"
import "./banner.css"


export const Banner = () => {

  const [movie, setMovie] = useState({})

  const getMovie = async () => {
    const {backdrop_path,title, original_title, overview} =  await getRandomMovie()
    setMovie({backdrop_path,title, original_title, overview})
  }
  useEffect(() => {
    getMovie()
  }, [])
  
  useEffect(() => {
    const timer = setInterval(() =>{
      getMovie()
    }, 8000)
    return () => clearInterval(timer);
  
  })

    const BASE_URL = "https://image.tmdb.org/t/p/w500"
  
  return (
  
  <div className="contenedor">
    <img src={BASE_URL+movie.backdrop_path} className="card-img w-100 m-0 p-0" alt={movie.original_title}/>
    <div className="card-img-overlay miBanner" >
      <div></div>
      <h1 classname="card-title bannerTitle">{movie.title}</h1>
      <p className="card-text text-left opacityBackground p-3">{movie.original_title}<br/><small>{movie.overview}</small></p>
    </div>
  </div>
  
  )
}