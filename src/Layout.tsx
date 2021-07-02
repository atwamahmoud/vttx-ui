// eslint-disable-next-line no-use-before-define
import React, {useCallback, FC} from "react";

import {NavLink, Route, useLocation} from "react-router-dom";
import {VIEWS} from "./Routes";
import styles from "./styles/layout.module.css";
import {View} from "./@types/common";

console.log(styles);

const Layout: FC = (props) => {
  const location = useLocation();
  console.log(location.pathname);

  const renderNavLinks = useCallback((views: View[]) => {
    return views.map((view) => (
      <NavLink className={styles.navLink} to={view.path} key={view.path}>
        {view.name}
      </NavLink>
    ));
  }, []);

  const renderViews = useCallback((views: View[]) => {
    return views.map((view) => {
      const Component = view.component || React.Fragment;
      return (
        <Route path={view.path} key={view.path}>
          <Component />
        </Route>
      );
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>VTT</h1>
      </header>
      <main className={styles.wrapper}>
        <nav className={styles.navBar}>{renderNavLinks(VIEWS)}</nav>
        <section className={styles.mainContent}>{renderViews(VIEWS)}</section>
      </main>
    </>
  );
};

export default Layout;
