import * as CH from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Content: React.FC = () => {
  return (
    <CH.Box p={8} flexGrow={1}>
      <CH.Card p={4} height="100%" boxShadow="md">
        <Outlet />
      </CH.Card>
    </CH.Box>
  );
};

export default Content;
