import * as D from "duck";
import React from "react";

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [app, setApp] = React.useState<D.IAppContext>({
    isLoading: !!window.localStorage.getItem("token"),
    user: null,
    token: null,
  });

  return (
    <D.AppContext.Provider value={[app, setApp]}>
      {children}
    </D.AppContext.Provider>
  );
};

export default AppContextProvider;
