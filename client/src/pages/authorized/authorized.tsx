import React from "react";
import { Route, Routes } from "react-router-dom";

import * as LC from "./components";

const Authorized: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<LC.Layout />}>
        <Route index element={<div>authorized</div>} />
      </Route>
    </Routes>
  );
};

export default Authorized;
