import { useFetch, TMDBServices } from "commons"
import {Spinner, Banner, SwipImages} from "features";

export const Inicio = () => {
  const {data, error,isLoading } = useFetch(
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
    <SwipImages servicio={TMDBServices.getPopularMovies} title="Películas populares" />
    <SwipImages servicio={TMDBServices.getPopularSeries} title="Series populares"/>
    <SwipImages servicio={TMDBServices.getTopRatedMovies} title="Películas mejor puntuadas"/>
    <SwipImages servicio={TMDBServices.getTopRatedSeries} title="Series mejor puntuadas"/>
    </> : <Spinner />}
  </div>
  </>;

}