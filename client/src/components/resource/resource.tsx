import React from "react";
import { Route, Routes } from "react-router-dom";

const Resource: React.FC<{
  list?: React.ExoticComponent;
  create?: React.ExoticComponent;
  edit?: React.ExoticComponent;
  show?: React.ExoticComponent;
}> = ({ list, create, show, edit }) => {
  return (
    <Routes>
      {list && <Route index element={React.createElement(list)} />}
      {show && <Route path=":id/*" element={React.createElement(show)} />}
      {create && (
        <Route path="create/*" element={React.createElement(create)} />
      )}
      {edit && <Route path=":id/edit/*" element={React.createElement(edit)} />}
    </Routes>
  );
};

export default Resource;
