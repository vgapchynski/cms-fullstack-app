import { FieldValues, UseFormSetError } from "react-hook-form";

export interface FormSubmitHandler<TValues extends FieldValues> {
  (
    values: TValues,
    meta: {
      setError: UseFormSetError<TValues>;
    }
  ): void;
}
