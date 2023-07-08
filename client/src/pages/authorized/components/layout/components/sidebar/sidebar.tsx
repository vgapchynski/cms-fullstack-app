import * as CH from "@chakra-ui/react";
import React from "react";
import { AiOutlineDatabase } from "react-icons/ai";
import { GoHome } from "react-icons/go";

import * as LC from "./components";

const Sidebar: React.FC = () => {
  const { colorMode } = CH.useColorMode();

  return (
    <CH.Flex
      boxShadow="md"
      position="relative"
      zIndex={2}
      flexShrink={0}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      bg={colorMode === "light" ? "white" : "gray.900"}
    >
      <LC.NavLink ariaLabel="open home page" to="/" icon={GoHome} />
      <LC.NavLink
        ariaLabel="open posts page"
        to="/posts"
        icon={AiOutlineDatabase}
      />
    </CH.Flex>
  );
};

export default Sidebar;
