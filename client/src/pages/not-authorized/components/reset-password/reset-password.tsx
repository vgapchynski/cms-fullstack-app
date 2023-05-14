import * as CH from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ResetPassword: React.FC = () => {
  return (
    <>
      <CH.Heading as="h1" size="2xl">
        Reset Password
      </CH.Heading>

      <CH.Card width="100%">
        <CH.CardBody
          display="flex"
          flexDirection="column"
          gap={4}
          alignItems="center"
        >
          <CH.FormControl>
            <CH.FormLabel>Login:</CH.FormLabel>
            <CH.Input />
          </CH.FormControl>
          <CH.Button colorScheme="blue" type="submit" width="100%">
            Submit
          </CH.Button>
          <CH.Link as={Link} color="blue.600" to="/">
            Go to Sign In
          </CH.Link>
        </CH.CardBody>
      </CH.Card>
    </>
  );
};

export default ResetPassword;
