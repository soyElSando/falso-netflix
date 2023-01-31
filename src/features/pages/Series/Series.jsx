import {Banner, Spinner, SwipImagesSeries} from "features"
import { useFetch, TMDBServices } from "commons";

export const Series = () => {
  const { data, error, isLoading } = useFetch(TMDBServices.getTopRatedSeries);
  if (error) {console.error(error)};

  return <>
  <div className="container-fluid text-center m-0 p-0">
  {!isLoading ? 
  <>
  <Banner movies={data}/>
  <SwipImagesSeries />
  </> : <Spinner />}
  </div>
  </>;
};
