import * as CH from "@chakra-ui/react";
import React from "react";

const Layout: React.FC<
  React.PropsWithChildren<
    CH.FormControlProps & {
      label: string;
      errorMessage?: string;
      helperText?: string;
    }
  >
> = ({ children, label, errorMessage, helperText, ...rest }) => {
  return (
    <CH.FormControl isInvalid={!!errorMessage} {...rest}>
      <CH.FormLabel>{label}</CH.FormLabel>
      {children}
      <CH.FormHelperText>{helperText}</CH.FormHelperText>
      <CH.FormErrorMessage>{errorMessage}</CH.FormErrorMessage>
    </CH.FormControl>
  );
};

export default Layout;
