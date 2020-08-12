import React from "react";

import { CompanyLogo } from "../../molecules/CompanyLogo";
import { MenuHeader } from "../../molecules/MenuHeader";
import { HeaderContainer } from "./styles";

export const NavBar = () => {
  return (
    <HeaderContainer>
      <CompanyLogo />
      <MenuHeader />
    </HeaderContainer>
  );
};
