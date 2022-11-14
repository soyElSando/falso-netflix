import { TMDBServices } from "../../../commons/services/TMDB_API";

export const Peliculas = () => {
  console.log(TMDBServices.getPopularMovies());
  return <>
  <h1>Peliculas</h1>
  </>;
};
