import { HashRouter, Routes, Route } from "react-router-dom";
import { Main } from "../pages/main";

import { AppLayout } from "./AppLayout";

import { ROUTE_MAIN } from "./constants";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTE_MAIN} element={<Main />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
