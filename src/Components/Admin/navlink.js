import React from "react";
import { Link } from "react-router-dom";

export default ({ partial=true, ...props}) => (
  <Link
    {...props}
    getProps={({isCurrent, isPartiallyCurrent }) => {
      const isActive = partial
        ? isPartiallyCurrent
        : isCurrent;
    }}
  />
);