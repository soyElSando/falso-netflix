import {Banner, Spinner, SwipImages} from "features";
import {useFetch, TMDBServices} from "commons"

export const Peliculas = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getPopularMovies);
  if (error) {console.error(error)};

  return <>
  <div className="container-fluid text-center m-0 p-0">
  {!isLoading ? <>
  <Banner movies={data}/> 
  <SwipImages servicio={TMDBServices.getPopularMovies} title="Películas populares" />
  <SwipImages servicio={TMDBServices.getTopRatedMovies} title="Películas mejor puntuadas"/>
  </>
  : <Spinner />}
  </div>
  </>;
};
