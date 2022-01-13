import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="white" />
      <path d="M15.9989 4L15.8379 4.54694V20.4164L15.9989 20.577L23.3652 16.2228L15.9989 4Z" fill="#343434" />
      <path d="M15.9983 4L8.63184 16.2228L15.9983 20.577V12.8744V4Z" fill="#8C8C8C" />
      <path d="M15.999 21.9721L15.9082 22.0828V27.7357L15.999 28.0007L23.3697 17.6201L15.999 21.9721Z" fill="#3C3C3B" />
      <path d="M15.9983 28.0007V21.9721L8.63184 17.6201L15.9983 28.0007Z" fill="#8C8C8C" />
      <path d="M15.999 20.5766L23.3653 16.2223L15.999 12.874V20.5766Z" fill="#141414" />
      <path d="M8.63184 16.2223L15.9983 20.5766V12.874L8.63184 16.2223Z" fill="#393939" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" />
    </svg>
  );
};

export default Icon;
