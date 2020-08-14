import React from "react";

import MenuItem from "../../atoms/MenuItem";

import { MenuFooterContainer } from "./styles";

export const MenuFooter = () => {
  return (
    <MenuFooterContainer>
      <MenuItem value="Aviso Legal" />
      <MenuItem value="Política de Privacidad" />
      <MenuItem value="Gastos de envío" />
      <MenuItem value="Sistema de Pago" />
      <MenuItem value="Plazos de Entrega" />
      <MenuItem value="Devoluciones" />
    </MenuFooterContainer>
  );
};
