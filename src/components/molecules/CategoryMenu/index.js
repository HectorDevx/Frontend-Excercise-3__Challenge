import React from "react";

import MenuItem from "../../atoms/MenuItem";

import { CategoryMenuContainer } from "./styles";

export const CategoryMenu = () => {
  return (
    <CategoryMenuContainer>
      <MenuItem value="Inicio" />
      <MenuItem value="Carretera" />
      <MenuItem value="Ciudad" />
      <MenuItem value="Off Road" />
      <MenuItem value="Trail" />
      <MenuItem value="Trail" />
      <MenuItem value="Casual" />
      <MenuItem value="Accesorios" />
    </CategoryMenuContainer>
  );
};
