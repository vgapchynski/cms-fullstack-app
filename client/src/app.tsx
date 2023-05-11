import * as P from "pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<P.Home />} />
      </Route>
    </Routes>
  );
};

export default App;
