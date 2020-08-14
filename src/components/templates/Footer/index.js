import React, { Component } from "react";

import { MenuFooter } from "../../molecules/MenuFooter";
import { SocialMedia } from "../../molecules/SocialMedia";

import { FooterContainer } from "./styles";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <MenuFooter />
        <SocialMedia />
      </FooterContainer>
    );
  }
}

export default Footer;
