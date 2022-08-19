import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../pages/main";
import { Quiz } from "../pages/quiz";

import { AppLayout } from "./AppLayout";

import { ROUTE_MAIN, ROUTE_QUIZ } from "./constants";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={ROUTE_MAIN} element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
