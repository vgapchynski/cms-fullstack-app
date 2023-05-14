import * as C from "components";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components";

const SignIn = React.lazy(() => import("./components/sign-in"));
const SignUp = React.lazy(() => import("./components/sign-up"));
const ResetPassword = React.lazy(() => import("./components/reset-password"));

const NotAuthorized: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <C.RouteSuspense>
              <SignIn />
            </C.RouteSuspense>
          }
        />
        <Route
          path="sign-up"
          element={
            <C.RouteSuspense>
              <SignUp />
            </C.RouteSuspense>
          }
        />
        <Route
          path="reset-password"
          element={
            <C.RouteSuspense>
              <ResetPassword />
            </C.RouteSuspense>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default NotAuthorized;
