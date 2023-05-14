import * as CH from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <CH.Container
      maxWidth="container.sm"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={8}
      py={4}
    >
      <Outlet />
    </CH.Container>
  );
};

export default Layout;
