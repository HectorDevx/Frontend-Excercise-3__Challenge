import React from "react";

import SimpleArticle from "../../molecules/SimpleArticle";

import { HighlightArticlesContainer } from "./styles";

export const HighlightArticles = () => {
  return (
    <HighlightArticlesContainer>
      <h2>Artículos Destacados</h2>
      <div>
        <SimpleArticle image="Imagen" name="Nombre" />
        <SimpleArticle image="Imagen" name="Nombre" />
        <SimpleArticle image="Imagen" name="Nombre" />
        <SimpleArticle image="Imagen" name="Nombre" />
      </div>
    </HighlightArticlesContainer>
  );
};
