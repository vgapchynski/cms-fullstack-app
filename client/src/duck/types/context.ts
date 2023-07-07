import React from "react";

export interface User {
  _id: string;
  email: string;
}

export interface IAppContext {
  isLoading: boolean;
  user: null | User;
  token: string | null;
}

export type SetAppContext = React.Dispatch<React.SetStateAction<IAppContext>>;

export interface AppContextMethods {
  logOut: () => void;
}
