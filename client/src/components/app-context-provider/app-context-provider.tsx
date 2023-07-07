import * as API from "api";
import * as D from "duck";
import React from "react";

const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { refetch } = API.useMeQuery({ enabled: false });

  const token = window.localStorage.getItem("token");

  const [app, setApp] = React.useState<D.IAppContext>({
    isLoading: !!token,
    user: null,
    token: null,
  });

  React.useEffect(() => {
    if (token) {
      refetch()
        .then((response) => {
          if (response.data) {
            setApp({
              isLoading: false,
              token,
              user: response.data.data,
            });
          }
        })
        .catch(() => {
          setApp((prev) => ({
            ...prev,
            isLoading: false,
          }));
        });
    }
  }, []);

  return (
    <D.AppContext.Provider value={[app, setApp]}>
      {children}
    </D.AppContext.Provider>
  );
};

export default AppContextProvider;
