import * as CH from "@chakra-ui/react";
import * as API from "api";
import * as C from "components";
import * as D from "duck";
import * as H from "hooks";
import React from "react";
import { Link } from "react-router-dom";

const schema = D.yup.object({
  email: D.yup.string().required(D.VALIDATION_MESSAGES.required("Email")),
  password: D.yup.string().required(D.VALIDATION_MESSAGES.required("Password")),
});

const SignIn: React.FC = () => {
  const [, setApp] = H.useAppContext();

  const createToast = CH.useToast({
    isClosable: true,
    duration: 5000,
  });

  const { mutateAsync } = API.useSignInMutation({
    onSuccess: (response) => {
      D.axios.defaults.headers.Authorization = response.data.token;
      window.localStorage.setItem("token", response.data.token);

      setApp((prev) => ({
        ...prev,
        user: {
          _id: response.data._id,
          email: response.data.email,
        },
        token: response.data.token,
      }));
    },
    onError: (e) => {
      if (e.response?.data?.errors?.common) {
        createToast({
          title: "Error",
          description: e.response?.data?.errors?.common,
          status: "error",
        });
      }
    },
  });

  const handleSubmit: D.FormSubmitHandler<{
    email: string;
    password: string;
  }> = (values) => {
    return mutateAsync(values).catch(() => null);
  };

  return (
    <>
      <CH.Heading as="h1" size="2xl">
        Sign In
      </CH.Heading>

      <CH.Card width="100%">
        <CH.CardBody>
          <C.Form onSubmit={handleSubmit} schema={schema}>
            <C.TextInput name="email" label="Email" />
            <C.TextInput name="password" label="Password" />
            <C.Form.SubmitButton width="100%" />
            <CH.Link as={Link} to="/reset-password">
              Reset Password
            </CH.Link>
            <CH.Link as={Link} color="blue.600" to="/sign-up">
              Don't have an account? Sign Up
            </CH.Link>
          </C.Form>
        </CH.CardBody>
      </CH.Card>
    </>
  );
};

export default SignIn;
