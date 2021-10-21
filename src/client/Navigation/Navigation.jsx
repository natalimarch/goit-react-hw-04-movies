import { NavLink } from "react-router-dom";

import styles from "../Navigation/Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={styles.NavLink}>
      Home
    </NavLink>
    <NavLink exact to="/movies" className={styles.NavLink}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
