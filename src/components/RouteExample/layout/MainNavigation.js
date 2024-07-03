import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.scss";
// navLink 에서만 함수 정의 가능
const MainNavigation = () => {
  //NavLInk 컴포넌트에 className 프롭스에 함수를 전달하면
  // 첫번째 파라미터에 어떤 객체 정보를 준다.
  // 활성화 css ⭐️

  //    <NavLink to="" className={activeFn} end>       //문제 생겼을때를 위한 end cjfl
  const activeFn = ({ isActive }) => {
    return isActive ? styles.active : undefined;
  };
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="" className={activeFn} end>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="events" className={activeFn} end>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
