import * as CH from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

const Form = <TValues extends FieldValues>({
  children,
  onSubmit,
  schema,
  ...rest
}: {
  children: React.ReactNode;
  onSubmit: (values: TValues) => void;
  schema: AnyObjectSchema;
} & CH.FlexProps) => {
  const useFormData = useForm<TValues>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...useFormData}>
      <CH.Flex
        flexDirection="column"
        gap={4}
        alignItems="center"
        {...rest}
        as="form"
        onSubmit={useFormData.handleSubmit(onSubmit)}
      >
        {children}
      </CH.Flex>
    </FormProvider>
  );
};

export default Form;
