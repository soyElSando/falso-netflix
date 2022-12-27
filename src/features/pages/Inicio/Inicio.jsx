import { useFetch, TMDBServices } from "commons/services"
import { Carrousel } from "features";
import {SwipImages_peliculas, SwipImages_series, Spinner, Banner} from "features";

export const Inicio = () => {
  const {
    data: data,
    error: error,
    isLoading: isLoading,
  } = useFetch(
    (Math.floor((Math.random()*2))) 
    ? TMDBServices.getTopRatedSeries 
    : TMDBServices.getTopRatedMovies);
  
  if (error) console.error(error);

  return <>
  <div className="container-fluid text-center m-0 p-0">
    {/* <Carrousel data={dataSeries} isLoading={isLoadingSeries}/>
    <Carrousel data={dataMovies} isLoading={isLoadingMovies}/> */}
    {!isLoading ? 
    <>
    <Banner movies={data}/>
    <SwipImages_peliculas />
    <SwipImages_series />
    </> : <Spinner />}
  </div>
  </>;

}