import * as CH from "@chakra-ui/react";
import React from "react";

const Sidebar: React.FC = () => {
  const { colorMode } = CH.useColorMode();

  return (
    <CH.Flex
      boxShadow="md"
      position="relative"
      zIndex={2}
      flexShrink={0}
      p={4}
      bg={colorMode === "light" ? "white" : "gray.900"}
    >
      Sidebar
    </CH.Flex>
  );
};

export default Sidebar;
