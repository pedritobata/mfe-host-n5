// @ts-ignore
import { mount } from "expendables/ExpendablesApp";
import { useRef, useEffect } from "react";
// import { useHistory } from 'react-router-dom';

const ExpendablesApp = () => {
  const ref = useRef(null);
  // const history = useHistory();

  useEffect(() => {
    /* const { onParentNavigate } =  */ mount(
      ref.current /* , {
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
  }, []);

  return <div ref={ref} />;
};

export default ExpendablesApp;
