import * as CH from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Content: React.FC = () => {
  return (
    <CH.Box p={8} flexGrow={1}>
      <CH.Flex p={4} bg="white" borderRadius="md" height="100%" boxShadow="md">
        <Outlet />
      </CH.Flex>
    </CH.Box>
  );
};

export default Content;