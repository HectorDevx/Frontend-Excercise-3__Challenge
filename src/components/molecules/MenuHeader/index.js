import React from "react";

import MenuItem from "../../atoms/MenuItem";

import { MenuHeaderContainer } from "./styles";

export const MenuHeader = () => {
  return (
    <MenuHeaderContainer>
      <MenuItem value="Ayuda" />
      <MenuItem value="Nuestras tiendas" />
      <MenuItem value="Contacto" />
    </MenuHeaderContainer>
  );
};
