import style from './App.module.css';
import {  Outlet } from "react-router-dom";
import { HeaderAll } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { HeaderContainer } from './components/Header/HeaderContainer';

export default function App(props) {
  return (
    <div className={style.app}>
      <HeaderContainer />
      <Navigation />
      <div className={style.main_content}>
        <Outlet />
      </div>
    </div>
  );
}

