import React from "react";

import { IAppContext, SetAppContext } from "../types";

export const AppContext = React.createContext<[IAppContext, SetAppContext]>([
  {
    isLoading: true,
    user: null,
    token: null,
  },
  () => undefined,
]);
