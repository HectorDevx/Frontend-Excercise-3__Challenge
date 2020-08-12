import React from "react";

import CompanyName from "../../atoms/CompanyName";
import CompanyIcon from "../../atoms/CompanyIcon";

import { LogoContainer } from "./styles";

export const CompanyLogo = () => {
  return (
    <LogoContainer>
      <CompanyName />
      <CompanyIcon />
    </LogoContainer>
  );
};
