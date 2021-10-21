import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../shared/services/movies";
import styles from "./MovieDetailsPage.module.css";

const CastPage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieCredits(id);
        setCast(data.cast);
      } catch (error) {}
    };
    fetchMovie();
  }, [id]);

  const imagePath = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <ul className={styles.Cast}>
        {cast.map((item) => (
          <li className={styles.CastLink} key={item.id}>
            <img
              src={
                item.profile_path
                  ? imagePath + item.profile_path
                  : "Image not found"
              }
              alt="actor"
              width="150"
            />
            <p>{item.name}</p>
            <p>
              Character: <span>{item.character}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastPage;
