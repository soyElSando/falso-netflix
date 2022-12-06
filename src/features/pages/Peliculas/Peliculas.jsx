import {Banner, Spinner} from "features";
import {useFetch, TMDBServices} from "commons/services"

export const Peliculas = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getPopularMovies);
  if (error) {console.error(error)};

  return <>
  <div className="container-fluid text-center m-0 p-0">
  {!isLoading ? <Banner movies={data}/> : <Spinner />}
  </div>
  </>;
};
