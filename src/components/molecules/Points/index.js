import React, { Component } from "react";

import { FaCircle } from "react-icons/fa";

import { PointsContainer } from "./styles";

class Points extends Component {
  render() {
    return (
      <PointsContainer>
        <FaCircle color="#FFFFFF" opacity="0.5" />
        <FaCircle color="#FFFFFF" opacity="0.5" />
        <FaCircle color="#FFFFFF" opacity="0.5" />
        <FaCircle color="#FFFFFF" opacity="0.5" />
        <FaCircle color="#FFFFFF" opacity="0.5" />
      </PointsContainer>
    );
  }
}

export default Points;
