import { TMDBServices } from "../../commons/services/TMDB_API"

const getRandomMovie = async () =>{
    const movies = await TMDBServices.getPopularMovies()
   // const i= Math.random()*20
    const randomMovie = await movies[0]
    return randomMovie
    
}

export default getRandomMovie