import * as CH from "@chakra-ui/react";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

import { BaseInputProps } from "../../duck";
import Layout from "../layout";

const TextInput: React.FC<BaseInputProps & { defaultValue?: string }> = ({
  label,
  helperText,
  name,
  defaultValue = "",
}) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue,
  });

  return (
    <Layout label={label} helperText={helperText} errorMessage={error?.message}>
      <CH.Input {...field} />
    </Layout>
  );
};

export default TextInput;
