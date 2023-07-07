import * as CH from "@chakra-ui/react";
import * as H from "hooks";
import React from "react";
import { BiUser } from "react-icons/bi";

const Header: React.FC = () => {
  const [, , { logOut }] = H.useAppContext();

  return (
    <CH.Flex
      justifyContent="flex-end"
      width="100%"
      bg="blue.500"
      py={4}
      px={8}
      position="sticky"
      top={0}
    >
      <CH.Menu>
        <CH.MenuButton as={CH.IconButton} icon={<CH.Icon as={BiUser} />} />
        <CH.MenuList>
          <CH.MenuItem onClick={logOut}>Log Out</CH.MenuItem>
        </CH.MenuList>
      </CH.Menu>
    </CH.Flex>
  );
};

export default Header;
