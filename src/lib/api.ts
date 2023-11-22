import { Movie } from "../types/movies";

export const movies: Movie[] = [
  {
    id: "609681",
    name: "The Marvels",
    path: "/marvels",
  },
  {
    id: "299054",
    name: "The Expendables",
    path: "/expendables",
  },
];

export const getMovies = async (): Promise<Movie[]> => {
  return movies;
};
