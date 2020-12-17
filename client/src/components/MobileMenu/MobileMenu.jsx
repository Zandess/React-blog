import React from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.scss";
function MobileMenu({ state, setState }) {
  const hideMobileMenu = () => {
    setState(false);
  };

  return (
    <div
      className={
        state ? "mobile-menu__linewrapper active" : "mobile-menu__linewrapper"
      }
    >
      <div
        className={
          state ? "mobile-menu__overside active" : "mobile-menu__overside"
        }
        onClick={hideMobileMenu}
      ></div>
      <ul className={state ? "mobile-menu__list active" : "mobile-menu__list"}>
        <li className="menu__item">
          <Link to="/" className="menu__link" onClick={hideMobileMenu}>
            Новости
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/about" className="menu__link" onClick={hideMobileMenu}>
            Обо мне
          </Link>
        </li>
        {localStorage.length ? (
          <li className="menu__item">
            <Link to="/addnews" className="menu__link" onClick={hideMobileMenu}>
              Предложить новость
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default MobileMenu;
