import React from "react";

import { AppContextMethods, IAppContext, SetAppContext } from "../types";

export const AppContext = React.createContext<
  [IAppContext, SetAppContext, AppContextMethods]
>([
  {
    isLoading: true,
    user: null,
    token: null,
  },
  () => undefined,
  { logOut: () => undefined },
]);
