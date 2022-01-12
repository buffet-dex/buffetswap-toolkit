import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path
          d="M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V11H2V6Z"
          stroke="#202020"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18.5 16.5H15.5" stroke="#202020" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path
          d="M12 11H22V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H12V11Z"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12 11H2V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H12V11Z"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M7 16.5L5.5 15M5.5 18L7 16.5L5.5 18ZM7 16.5L8.5 15L7 16.5ZM7 16.5L8.5 18L7 16.5Z"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default Icon;
