import { useFetch, TMDBServices } from "commons/services"
import { Carrousel } from "features";

export const Inicio = () => {
  const {
    data: dataSeries,
    error: errorSeries,
    isLoading: isLoadingSeries,
  } = useFetch(TMDBServices.getTopRatedSeries);
  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useFetch(TMDBServices.getTopRatedMovies);
  if (errorSeries) console.error(errorSeries);
  if (errorMovies) console.error(errorMovies);

  return <>
  <div className="container m-0 p-0">
    <Carrousel data={dataSeries} isLoading={isLoadingSeries}/>
    <Carrousel data={dataMovies} isLoading={isLoadingMovies}/>
  </div>
  </>;

}