import { TMDBServices } from "../../commons/services/TMDB_API"

const getRandomMovie = async () =>{
    const movies = await TMDBServices.getPopularMovies()
    const i= Math.floor(Math.random()*movies.length)
    const randomMovie = await movies[i]
    return randomMovie
    
}

export default getRandomMovie