// import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../shared/services/movies";
// import { useLocation } from "react-router-dom";
import MovieList from "../../client/MovieList/MovieList";
import { useFetch } from "../../shared/hooks";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const [trends] = useFetch([], getTrendingMovies);
  // const [trends, setTrends] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const TrendMovies = async () => {
  //     try {
  //       const { data } = await getTrendingMovies();
  //       setTrends(data.results);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   TrendMovies();
  // }, []);

  return (
    <>
      <h1 className={styles.Title}>Trending today</h1>
      <MovieList list={trends} />
    </>
  );
};

export default HomePage;
