import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./client/Spinner/Spinner";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" exact>
          <HomePage title="Home Page" />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage title="Movies Page" />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
        <Route>
          <NotFoundPage title="Not Found Page" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
