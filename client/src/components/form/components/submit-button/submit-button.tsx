import * as CH from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton: React.FC<React.PropsWithChildren<CH.ButtonProps>> = ({
  children = "Submit",
  ...rest
}) => {
  const { formState } = useFormContext();

  return (
    <CH.Button
      colorScheme="blue"
      isLoading={formState.isSubmitting}
      {...rest}
      type="submit"
    >
      {children}
    </CH.Button>
  );
};

export default SubmitButton;
