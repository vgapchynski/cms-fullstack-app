import * as CH from "@chakra-ui/react";
import React from "react";

import * as LC from "./components";

const Layout: React.FC = () => {
  const { colorMode } = CH.useColorMode();

  return (
    <CH.Flex
      height="100vh"
      overflow="hidden"
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <LC.Sidebar />
      <CH.Flex flexGrow={1} flexDir="column">
        <LC.Header />
        <LC.Content />
      </CH.Flex>
    </CH.Flex>
  );
};

export default Layout;
