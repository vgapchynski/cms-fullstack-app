import React from "react";
import { Route, Routes } from "react-router-dom";

const Authorized: React.FC = () => {
  return (
    <Routes>
      <Route index element={<div>authorized</div>} />
    </Routes>
  );
};

export default Authorized;
