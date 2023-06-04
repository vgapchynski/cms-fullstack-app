import * as CH from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as D from "duck";
import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

import * as LC from "./components";

const Form = <TValues extends FieldValues>({
  children,
  onSubmit,
  schema,
  ...rest
}: {
  children: React.ReactNode;
  onSubmit: D.FormSubmitHandler<TValues>;
  schema: AnyObjectSchema;
} & Omit<CH.FlexProps, "onSubmit">) => {
  const useFormData = useForm<TValues>({
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values: TValues) =>
    onSubmit(values, { setError: useFormData.setError });

  return (
    <FormProvider {...useFormData}>
      <CH.Flex
        flexDirection="column"
        gap={4}
        alignItems="center"
        {...rest}
        as="form"
        onSubmit={useFormData.handleSubmit(handleSubmit)}
      >
        {children}
      </CH.Flex>
    </FormProvider>
  );
};

type TLocalForm = typeof Form;

interface IExportForm extends TLocalForm {
  SubmitButton: typeof LC.SubmitButton;
}

const ExportForm = Form as IExportForm;
ExportForm.SubmitButton = LC.SubmitButton;

export default ExportForm;
