import * as D from "duck";

export const SCHEMA = D.yup.object().shape({
  email: D.yup
    .string()
    .email(D.VALIDATION_MESSAGES.wrongFormat("Emails"))
    .required(D.VALIDATION_MESSAGES.required("Email")),
  password: D.yup.string().required(D.VALIDATION_MESSAGES.required("Password")),
  confirmationPassword: D.yup
    .string()
    .required(D.VALIDATION_MESSAGES.required("Confirmation Password"))
    .equals([D.yup.ref("password")], D.VALIDATION_MESSAGES.equalTo("Password")),
});
