import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="18" viewBox="0 0 24 18" {...props}>
      <path
        d="M20.3302 1.50124C18.7563 0.790708 17.0912 0.285847 15.3789 0C15.1657 0.37203 14.9165 0.872412 14.7446 1.27049C12.8985 1.00266 11.0693 1.00266 9.25715 1.27049C9.0854 0.872502 8.83059 0.37203 8.61534 0C6.90139 0.285979 5.23486 0.792126 3.66018 1.50494C0.526681 6.0736 -0.322788 10.5286 0.1019 14.9206C2.18024 16.4181 4.19437 17.3278 6.17456 17.923C6.66668 17.2701 7.10171 16.5788 7.47515 15.8563C6.76418 15.5951 6.07877 15.2733 5.42709 14.8946C5.59858 14.772 5.76604 14.6441 5.92921 14.5113C9.87815 16.2934 14.1689 16.2934 18.0708 14.5113C18.2347 14.6433 18.4021 14.7711 18.5728 14.8946C17.9201 15.2743 17.2334 15.5968 16.521 15.8582C16.8966 16.5836 17.3308 17.2756 17.8216 17.9248C19.8036 17.3297 21.8197 16.42 23.898 14.9206C24.3964 9.82927 23.0467 5.41502 20.3302 1.50115V1.50124ZM8.01318 12.2196C6.82771 12.2196 5.85553 11.1519 5.85553 9.85161C5.85553 8.55136 6.80699 7.48176 8.01318 7.48176C9.21946 7.48176 10.1916 8.54946 10.1708 9.85161C10.1727 11.1519 9.21946 12.2196 8.01318 12.2196ZM15.9867 12.2196C14.8012 12.2196 13.8292 11.1519 13.8292 9.85161C13.8292 8.55136 14.7805 7.48176 15.9867 7.48176C17.193 7.48176 18.1651 8.54946 18.1444 9.85161C18.1444 11.1519 17.193 12.2196 15.9867 12.2196Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;