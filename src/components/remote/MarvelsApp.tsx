// @ts-ignore
import { mount } from "marvels/MarvelsApp";
import { useRef, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
import { Lang } from "../../../../mfe-marvels/src/domain/model/Lang";

interface Props {
  lang: Lang;
}

const MarvelsApp: React.FC<Props> = ({ lang }) => {
  const ref = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    /* const { onParentNavigate } =  */ mount(
      ref.current,
      { lang } /* , {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    } */
    );
    // history.listen(onParentNavigate);
  }, [lang]);

  return <div ref={ref} />;
};

export default MarvelsApp;
