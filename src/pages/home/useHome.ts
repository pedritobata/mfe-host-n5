import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import { getMovies } from "../../lib/api";

const useHome = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovieList(movies);
      } catch (err) {
        setError("Something went wrong, please try later");
        setMovieList([]);
      }
    };

    fetchMovies();
  }, []);

  return {
    movieList,
    error,
  };
};

export default useHome;
