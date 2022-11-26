const API_KEY = process.env.REACT_APP_API_KEY;

const TMDB_API = {
  baseUrl: "https://api.themoviedb.org/3",
  baseImageHigh: "https://image.tmdb.org/t/p/original/",
  baseImageLow: "https://image.tmdb.org/t/p/w300/",

  movies: {
    popular: "/movie/popular?api_key=" + API_KEY,
    topRated: "/movie/top_rated?api_key=" + API_KEY,
  },
  series: {
    popular: "/tv/popular?api_key=" + API_KEY,
    topRated: "tv/top_rated?api_key=" + API_KEY,
  },
};

const adapter = (apiRes) => {
  return apiRes.results.map((result) => {
    return {
      title: result.title,
      id: result.id,
      description: result.overview,
      backdropHigh: TMDB_API.baseImageHigh + result.backdrop_path,
      backdropLow: TMDB_API.baseImageLow + result.backdrop_path,
    };
  });
};

export const TMDBServices = {
  /* Ver axios */
  getPopularMovies: async () => {
    const url = TMDB_API.baseUrl + TMDB_API.movies.popular;
    const movies = await fetch(url);
    const moviesJson = await movies.json();
    return adapter(moviesJson);
  },

  getTopRatedMovies: async () => {
    const url = TMDB_API.baseUrl + TMDB_API.movies.topRated;
    const movies = await fetch(url);
    const moviesJson = await movies.json();
    return adapter(moviesJson);
  },

  getPopularSeries: async () => {
    const url = TMDB_API.baseUrl + TMDB_API.series.popular;
    const series = await fetch(url);
    const seriesJson = await series.json();
    return adapter(seriesJson);
  },

  getTopRatedSeries: async () => {
    const url = TMDB_API.baseUrl + TMDB_API.series.topRated;
    const series = await fetch(url);
    const seriesJson = await series.json();
    return adapter(seriesJson);
  },
};