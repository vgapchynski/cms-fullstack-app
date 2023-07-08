import * as CH from "@chakra-ui/react";
import React from "react";

const RouteSuspense: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <CH.Flex minHeight="100%" align="center" justify="center">
          <CH.Spinner size="lg" />
        </CH.Flex>
      }
    >
      {children}
    </React.Suspense>
  );
};

export default RouteSuspense;
