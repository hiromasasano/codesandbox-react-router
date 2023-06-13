import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      {Page1Routes.map((route) => (
        <Route path={route.path} element={route.children} />
      ))}
      {Page2Routes.map((route) => (
        <Route path={route.path} element={route.children} />
      ))}
      <Route path={`*`} element={<Page404 />} />
    </Routes>
  );
};
