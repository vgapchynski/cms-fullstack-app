import { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";

import { ApiResponseErrors } from "../types";

export const setErrorsFromResponse = <TValues extends FieldValues>(
  errors: ApiResponseErrors["errors"] | undefined,
  setError: UseFormSetError<TValues>
) => {
  if (!errors) {
    return;
  }

  Object.keys(errors).forEach((key) => {
    setError(key as FieldPath<TValues>, { message: errors[key] });
  });
};