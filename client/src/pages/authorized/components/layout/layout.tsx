import * as CH from "@chakra-ui/react";
import React from "react";

import * as LC from "./components";

const Layout: React.FC = () => {
  return (
    <CH.Flex height="100vh" overflow="hidden" bg="gray.100">
      <LC.Sidebar />
      <CH.Flex flexGrow={1} flexDir="column">
        <LC.Header />
        <LC.Content />
      </CH.Flex>
    </CH.Flex>
  );
};

export default Layout;
