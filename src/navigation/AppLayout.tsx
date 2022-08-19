import { Outlet } from "react-router-dom";
import { NavBar } from "../lib/components/navbar";
import styles from "./appLayout.module.css";

export const AppLayout = () => {
  // Could wrap this with a Nav Bar or any other layout related code.
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};
