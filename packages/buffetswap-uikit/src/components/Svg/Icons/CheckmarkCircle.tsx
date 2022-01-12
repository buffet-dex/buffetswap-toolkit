import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 26" {...props}>
      <path
        d="M19.6667 1H6.33333C3.38781 1 1 3.38781 1 6.33333V19.6667C1 22.6122 3.38781 25 6.33333 25H19.6667C22.6122 25 25 22.6122 25 19.6667V6.33333C25 3.38781 22.6122 1 19.6667 1Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
