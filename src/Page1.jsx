import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={`/page1/detailA`}>DetailA</Link>
      <br />
      <Link to={`/page1/detailB`}>DetailB</Link>
  
      <Routes>
            <Route path={`/page1/detailA`} element={<Page1DetailA />} />
            <Route path={`/page1/detailB`} element={<Page1DetailB />} />
      </Routes>
    </div>
  );
};
