import * as H from "hooks";
import * as P from "pages";
import React from "react";

const App: React.FC = () => {
  const [app] = H.useAppContext();

  return app.user ? <P.Authorized /> : <P.NotAuthorized />;
};

export default App;
