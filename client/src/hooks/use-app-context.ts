import * as D from "duck";
import React from "react";

export const useAppContext = () => React.useContext(D.AppContext);