import React from "react";

export const Logo = (paddingSize) => {
  const padding = Object.keys(paddingSize).length >= 1;

  return (
    <h1
      className="logo"
      style={
        padding ? { padding: `${paddingSize.padding}rem 0rem 0rem` } : null
      }
    >
      Movie<span>X</span>
    </h1>
  );
};
