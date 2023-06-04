import * as CH from "@chakra-ui/react";
import * as API from "api";
import * as C from "components";
import * as D from "duck";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import * as LD from "./duck";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const successToast = CH.useToast({
    status: "success",
    title: "Account was created",
    description: "Use your credentials to sign in",
    duration: 5000,
    isClosable: true,
  });

  const { mutateAsync } = API.useSignUpMutation({
    onSuccess: () => {
      successToast();
      navigate("/");
    },
  });

  const handleSubmit: D.FormSubmitHandler<LD.IFormValues> = (
    values,
    { setError }
  ) => {
    return mutateAsync(values, {
      onError: (axiosError) => {
        if (axiosError?.response?.data.errors.unique) {
          setError("email", {
            message: axiosError?.response?.data.errors.unique,
          });
        } else {
          D.setErrorsFromResponse(axiosError?.response?.data.errors, setError);
        }
      },
    }).catch(() => null);
  };

  return (
    <>
      <CH.Heading as="h1" size="2xl">
        Sign Up
      </CH.Heading>

      <CH.Card width="100%">
        <CH.CardBody>
          <C.Form<LD.IFormValues> onSubmit={handleSubmit} schema={LD.SCHEMA}>
            <C.TextInput name="email" label="Email" />
            <C.TextInput name="password" label="Password" />
            <C.TextInput
              name="confirmationPassword"
              label="Confirmation Password"
            />
            <C.Form.SubmitButton width="100%" />
            <CH.Link as={Link} color="blue.600" to="/">
              Go to Sign In
            </CH.Link>
          </C.Form>
        </CH.CardBody>
      </CH.Card>
    </>
  );
};

export default SignUp;
