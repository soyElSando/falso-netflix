import {Banner, Spinner, SwipImages} from "features"
import { useFetch, TMDBServices } from "commons";

export const Series = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getTopRatedSeries);
  if (error) {console.error(error)};

  return <>
  <div className="container-fluid text-center m-0 p-0">
  {!isLoading ? 
  <>
  <Banner movies={data}/>
  <SwipImages servicio={TMDBServices.getPopularSeries} title="Series populares" />
  <SwipImages servicio={TMDBServices.getTopRatedSeries} title="Series mejor puntuadas" />
  </> : <Spinner />}
  </div>
  </>;
};
