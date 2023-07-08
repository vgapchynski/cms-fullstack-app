import React from "react";
import { Route, Routes } from "react-router-dom";

import RouteSuspense from "../route-suspense";

const Resource: React.FC<{
  list?: React.ExoticComponent;
  create?: React.ExoticComponent;
  edit?: React.ExoticComponent;
  show?: React.ExoticComponent;
}> = ({ list, create, show, edit }) => {
  return (
    <Routes>
      {list && (
        <Route
          index
          element={<RouteSuspense>{React.createElement(list)}</RouteSuspense>}
        />
      )}
      {show && (
        <Route
          path=":id/*"
          element={<RouteSuspense>{React.createElement(show)}</RouteSuspense>}
        />
      )}
      {create && (
        <Route
          path="create/*"
          element={<RouteSuspense>{React.createElement(create)}</RouteSuspense>}
        />
      )}
      {edit && (
        <Route
          path=":id/edit/*"
          element={<RouteSuspense>{React.createElement(edit)}</RouteSuspense>}
        />
      )}
    </Routes>
  );
};

export default Resource;
