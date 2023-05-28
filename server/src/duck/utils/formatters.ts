import * as D from "duck";
import { Error } from "mongoose";

export const formatMongooseErrors = (
  e: Error.ValidationError
): D.IValidationErrors => {
  if ("code" in e && (e.code === 11000 || e.code === 11001)) {
    return {
      errors: {
        unique: "Already exists",
      },
    };
  }

  return {
    errors: Object.keys(e.errors).reduce(
      (acc: { [key: string]: string }, key) => {
        acc[key] = e.errors[key].message;

        return acc;
      },
      {}
    ),
  };
};
