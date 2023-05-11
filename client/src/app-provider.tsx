import * as CH from "@chakra-ui/react";
import * as D from "duck";
import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import App from "./app.tsx";

const AppProvider: React.FC = () => {
  return (
    <QueryClientProvider client={D.QUERY_CLIENT}>
      <CH.ChakraBaseProvider theme={D.THEME}>
        <CH.ColorModeScript
          initialColorMode={D.THEME.config.initialColorMode}
        />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CH.ChakraBaseProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
