import * as CH from "@chakra-ui/react";
import * as C from "components";
import * as D from "duck";
import React from "react";
import { Link } from "react-router-dom";

const schema = D.yup.object({
  login: D.yup.string().required(D.VALIDATION_MESSAGES.required("Login")),
  password: D.yup.string().required(D.VALIDATION_MESSAGES.required("Password")),
});

const SignIn: React.FC = () => {
  return (
    <>
      <CH.Heading as="h1" size="2xl">
        Sign In
      </CH.Heading>

      <CH.Card width="100%">
        <CH.CardBody>
          <C.Form
            onSubmit={(values) => console.log("values", values)}
            schema={schema}
          >
            <C.TextInput name="login" label="Login" />
            <C.TextInput name="password" label="Password" />
            <CH.Button colorScheme="blue" type="submit" width="100%">
              Submit
            </CH.Button>
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
