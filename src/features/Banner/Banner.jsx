import { useEffect, useState } from "react"
import getRandomMovie from "./getRandomMovie"


export const Banner = () => {

  const [movie, setMovie] = useState()

  const getMovie = async () => {
    const {title} =  await getRandomMovie()
    setMovie(title)
  }

  useEffect(() => {
    getMovie()
    
  },[])
  
  return (<>
    <div>Tìtulo de la peli</div>
    <div>{movie}</div>
  </>
  )
}