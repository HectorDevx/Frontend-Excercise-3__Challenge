import React, { Component } from "react";

import { CategoryMenu } from "../../molecules/CategoryMenu";

import { CategoryBarContainer } from "./styles";

class CategoryBar extends Component {
  render() {
    return (
      <CategoryBarContainer>
        <CategoryMenu />
      </CategoryBarContainer>
    );
  }
}

export default CategoryBar;
