import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/button/Button";
import { Wrapper } from "./styles";
import useHome from "./useHome";

const Home: FC<{}> = () => {
  const { movieList, error } = useHome();
  const { t } = useTranslation();

  if (error || movieList.length === 0) {
    const message = error || "No movies available";
    return <p>{message}</p>;
  }

  return (
    <Wrapper>
      <h1 className="home__title">{t("Movie Explorer")}</h1>
      <div className="home__movielist">
        {movieList.map((movie) => (
          <Button primary as="link">
            <Link to={movie.path}>{movie.name}</Link>
          </Button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Home;
