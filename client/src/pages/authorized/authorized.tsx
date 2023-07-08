import React from "react";
import { Route, Routes } from "react-router-dom";

import * as LC from "./components";
import * as LP from "./pages";

const Authorized: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<LC.Layout />}>
        <Route index element={<div>dashboard</div>} />
        <Route path="posts/*" element={<LP.Posts />} />
      </Route>
    </Routes>
  );
};

export default Authorized;
