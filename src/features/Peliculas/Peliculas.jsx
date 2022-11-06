import { TMDBServices } from "../../commons/services/TMDB_API";

const Peliculas = () => {
  console.log(TMDBServices.getPopularMovies());
  return <>
  <h1>Peliculas</h1>
  </>;
};

export default Peliculas;
