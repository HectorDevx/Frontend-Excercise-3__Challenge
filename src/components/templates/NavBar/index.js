import React from "react";

import { CompanyLogo } from "../../molecules/CompanyLogo";
import { HeaderContainer } from "./styles";

export const NavBar = () => {
  return (
    <HeaderContainer>
      <CompanyLogo />
    </HeaderContainer>
  );
};
