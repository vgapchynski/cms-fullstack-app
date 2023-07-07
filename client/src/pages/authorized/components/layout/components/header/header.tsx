import * as CH from "@chakra-ui/react";
import * as H from "hooks";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Header: React.FC = () => {
  const [, , { logOut }] = H.useAppContext();
  const { colorMode, toggleColorMode } = CH.useColorMode();

  return (
    <CH.Flex
      justifyContent="flex-end"
      gap={2}
      width="100%"
      bg={colorMode === "light" ? "blue.500" : "gray.700"}
      py={4}
      px={8}
      position="sticky"
      zIndex={20}
      top={0}
    >
      <CH.Menu>
        <CH.MenuButton
          as={CH.IconButton}
          icon={<CH.Icon as={BiUser} />}
          borderRadius="50%"
        />
        <CH.MenuList>
          <CH.MenuItem onClick={logOut}>Log Out</CH.MenuItem>
        </CH.MenuList>
      </CH.Menu>
      <CH.IconButton
        aria-label="Toggle theme"
        borderRadius="50%"
        icon={
          <CH.Icon
            as={colorMode === "light" ? BsFillMoonFill : BsFillSunFill}
          />
        }
        onClick={toggleColorMode}
      />
    </CH.Flex>
  );
};

export default Header;
