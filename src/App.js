import style from './App.module.css';
import {  Outlet } from "react-router-dom";
import { HeaderAll } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';

export default function App(props) {
  return (
    <div className={style.app}>
      <HeaderAll />
      <Navigation />
      <div className={style.main_content}>
        <Outlet />
      </div>
    </div>
  );
}

