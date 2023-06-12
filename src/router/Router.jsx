import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      {Page1Routes.map((route) => (
        <Route path={route.path} element={route.children} />
      ))}
      <Route path={`page2`} element={<Page2 />} />
    </Routes>
  );
};
