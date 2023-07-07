import * as CH from "@chakra-ui/react";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <CH.Flex
      boxShadow="md"
      bg="white"
      position="relative"
      zIndex={2}
      flexShrink={0}
      p={4}
    >
      Sidebar
    </CH.Flex>
  );
};

export default Sidebar;