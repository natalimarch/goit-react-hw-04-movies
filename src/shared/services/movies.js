import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "67e32eac52b358cb1bf13e724f501ef6",
  },
});

export const searchMovies = (query) => {
  return instance.get("/search/movie", {
    params: {
      query,
    },
  });
};

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/day");
  return data.results;
};

export const getMovieInfo = (id) => {
  return instance.get(`/movie/${id}`, {
    params: {
      language: "ru-RU",
    },
  });
};

export const getMovieCredits = (id) => {
  return instance.get(`/movie/${id}/credits`, {
    params: {
      language: "ru-RU",
    },
  });
};

export const getMovieReviews = (id, page = 1) => {
  return instance.get(`/movie/${id}/reviews`, {
    params: {
      language: "en-EN",
      page,
    },
  });
};
