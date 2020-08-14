import React from "react";

import SimpleArticle from "../../molecules/SimpleArticle";

import { HighlightAdContainer } from "./styles";

export const HighlightAd = () => {
  return (
    <HighlightAdContainer>
      <h2>Marcas más vendidas</h2>
      <div>
        <SimpleArticle image="Imagen" name="Nombre" />
      </div>
    </HighlightAdContainer>
  );
};
