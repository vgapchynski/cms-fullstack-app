import * as CH from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink: React.FC<{ icon: IconType; to: string; ariaLabel: string }> = ({
  icon,
  to,
  ariaLabel,
}) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <CH.IconButton
          aria-label={ariaLabel}
          variant="ghost"
          size="lg"
          icon={<CH.Icon as={icon} fontSize="3xl" />}
          {...(isActive && {
            colorScheme: "blue",
          })}
        />
      )}
    </RouterNavLink>
  );
};

export default NavLink;
