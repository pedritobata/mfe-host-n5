import type { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./styles";
import LangPicker from "../lang-picker/LangPicker";

const Header: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const changeLangHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Wrapper>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-list-item">
            <Link to="/" className="header__navigation-link">
              {t("Home")}
            </Link>
          </li>
          <li className="header__navigation-list-item">
            <LangPicker onChange={changeLangHandler} langs={["en", "es"]} />
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
