import { Outlet } from "react-router-dom";
import { NavBar } from "../lib/components/navbar";
import styles from "./appLayout.module.css";

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};
