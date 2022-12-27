import {Banner, Spinner, SwipImages_series} from "features"
import { useFetch, TMDBServices } from "commons/services";

export const Series = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getPopularSeries);
  if (error) {console.error(error)};

  return <>
  <div className="container-fluid text-center m-0 p-0">
  {!isLoading ? 
  <>
  <Banner movies={data}/>
  <SwipImages_series />
  </> : <Spinner />}
  </div>
  </>;
};
